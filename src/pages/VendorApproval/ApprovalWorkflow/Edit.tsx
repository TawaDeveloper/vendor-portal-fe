import { Button, Select, message } from 'antd';
import styles from './Edit.less';
import ContentPanel from '@/components/ContentPanel';
import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { vendorPortalAPI } from '@/services';
// import { find } from 'lodash-es';
import WorkflowGraphEditor from './WorkflowGraphEditor';
import { INode, createUuid } from 'react-flow-builder';
import { find, isArray } from 'lodash-es';
// import { vendorPortalAPI } from '@/services';
// import { searchParam } from '@/services/vendorPortal/mods/wkfModel/search';
// import MarioListContent from '@tawa/mario-list-content';
// import { useRequest } from 'ahooks';
// import { Button } from 'antd';
// import { t } from 'i18next';
const MODEL_TYPE = [
  'Screening',
  'In depth Review',
  'Existing Vendor',
  'Vendor Requesting Files',
];
const PRODUCT_CATEGORYS = [
    "Meat",
    "Seafood Produce",
    "Grocery (Dry)",
    "Houseware"
]

function getNodeListAndRelationList(nodes: INode[], parenNode: any, nodeList: any[], nodeRelationList: any[],layer: number) {
   console.log(nodes, parenNode, nodeList, nodeRelationList, layer)
  for(let i = 0, l = nodes.length; i < l; i++) {
    const node = nodes[i];
   
    let nodeItem: any = null;
    if (node && node.data && node.data.userId) {
      console.log(node)
      let prevParentNode = null;
      for(let m = i - 1; m >= 0; m--) {
        const prevNode = nodes[m];
        if (prevNode && prevNode.data && prevNode.data.userId) {
          prevParentNode = prevNode;
          break;
        }
      }
      nodeItem = {
        "name": node.id,
        "userIds": `${node.data.userId}`
      }
      console.log(node, nodeItem)

      if (i = 0 && layer == 1) {
        nodeItem.nodeType = 1
      }
      if (i == (l - 1) && layer == 1) {
        nodeItem.nodeType = 2;
      }
      nodeList.push(nodeItem)
      if (prevParentNode) {
        nodeRelationList.push({
          "sourceNodeName": prevParentNode.id,
          "targetNodeName": node.id,
        })
      }
      else {
        if (parenNode) {
          nodeRelationList.push({
            "sourceNodeName": parenNode.id ? parenNode.id: parenNode.name,
            "targetNodeName": node.id,
          })
        }
      }
    }
    if (node.children && node.children.length > 0) {
     // getNodeListAndRelationList(node.children, nodeItem, nodeList, nodeRelationList, layer + 1)
    }
    break;
  }
  // if (layer === 1) {
  //   _nodeList[0].nodeType = 1;
  //   _nodeList[_nodeList.length - 1].nodeType = 2;
  // }
  

  // _nodeList.forEach((element:any) => {
  //   nodeList.push(element)
  // });

  // // if (nodeList.length == 1) {
  // //   nodeList[0].nodeType = 2
  // // }
  // // if (nodeList.length == 2) {
  // //   nodeList[0].nodeType = 1;
  // //   nodeList[1].nodeType = 2
  // // }
  // console.log(parenNode, nodes)
  // if (parenNode && _nodeList[0]) {
  //   _nodeRelationList.push({
  //     "sourceNodeName": parenNode.name,
  //     "targetNodeName": _nodeList[0].name,
  //     "conditionExpression": "ADDIF-PASS"
  //   })
  //   for(let i = 1, l = _nodeList.length; i < (l - 1) && l > 1; i++) {
  //     _nodeRelationList.push({
  //       "sourceNodeName": _nodeList[i].name,
  //       "targetNodeName": _nodeList[i + 1].name,
  //     })
  //   }
  // }
  // else {
  //   for(let i = 0, l = _nodeList.length; i < (l - 1) && l > 1; i++) {
  //     _nodeRelationList.push({
  //       "sourceNodeName": _nodeList[i].name,
  //       "targetNodeName": _nodeList[i + 1].name,
  //     })
  //   }
  // }
 
  
  // _nodeRelationList.forEach((element:any) => {
  //   nodeRelationList.push(element)
  // });
  // for(let i = 0, l = nodes.length; i < l; i++) {
  //   const node = nodes[i];
  //   let parentNode = null;
  //   for(let m = i - 1; m >= 0; m--) {
  //     if (_nodeList[m]) {
  //       parentNode = _nodeList[m];
  //       break;
  //     }
  //   }
  //   if (node.children) {
  //     getNodeListAndRelationList(node.children, parentNode, nodeList, nodeRelationList, layer + 1)
  //   }
  // }

}

const ApprovalWorkflowEdit = () => {
  
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const [nodes, setNodes] = useState<INode[]>([])
  const [modelType, setModelType] = useState(0);
  const [productCategory, setProductCategory] = useState(0);
  
  const save = async () => {
    let nodeList: any[] = [];
    let nodeRelationList : any[] = [];
    
    if (mode === "create") {
      
        getNodeListAndRelationList(nodes, null, nodeList, nodeRelationList, 1);
        console.log(nodes, nodeList, nodeRelationList)
        vendorPortalAPI.wkfModel.createModel.request({
            name: `${new Date().getTime()}`,
            data: JSON.stringify(nodes),
            modelType,
            nodeList: nodeList,
            nodeRelationList: nodeRelationList,
        }).then((response) => {
            if (response.success === true) {
                message.success(`Create Success!`)
            }
            else {
                message.error(`Create Fail! ${response.message}`)
            }
        })
    }
    if (mode === "update") {
        getNodeListAndRelationList(nodes, null, nodeList, nodeRelationList, 1);
        console.log(nodes, nodeList, nodeRelationList)
        vendorPortalAPI.wkfModel.updateModel.request({
            id: Number(searchParams.get("id")),
            data: JSON.stringify(nodes),
            modelType,
            nodeList: nodeList,
            nodeRelationList: nodeRelationList,
        }).then((response) => {
            if (response.success === true) {
                message.success(`Update Success!`)
            }
            else {
                message.error(`Update Fail! ${response.message}`)
            }
        })
    }
    
  }

  const start = async () => {
    if (mode === "update") {
      
      vendorPortalAPI.wkfProcdef.create.request({
          modelId: Number(searchParams.get("id")),
          modelType: modelType,
          vendorId: 14
      }).then((response) => {
          if (response.success === true) {
              message.success(`Create Success!`)
          }
          else {
              message.error(`Create Fail! ${response.message}`)
          }
      })
    }
  }
  const createDefaultWorkflow = () => {
    setNodes([
      {
       id: createUuid("node"),
       type: 'start',
       name: 'Start Node',
       data: {
         value: 0,
         label: MODEL_TYPE[0]
       },
       path: ['0'],
     },
     {
       id: createUuid("node"),
       type: 'product-node',
       name: 'Product Node',
       data: {
         value: 0,
         label: PRODUCT_CATEGORYS[0]
       },
       path: ['1'],
     }, 
     {
       id: createUuid("node"),
       type: 'end',
       name: 'End',

       path: ['2'],
     }, 
   ])
  }

  useEffect(() => {
    if (mode == "create") {
      createDefaultWorkflow()
       
    }
    if (mode == "update") {
        const modelId = searchParams.get("id");
        vendorPortalAPI.wkfModel.getDetail.request({
            modelId: Number(modelId)
           // modelType: 
        }).then((response) => {
            if (response.success === true && response.data) {
               // setData(JSON.parse(response.data.data));
                try {
                  const saveNodes = JSON.parse(response.data.data);
                  if (saveNodes && isArray(saveNodes)) {
                    setNodes(saveNodes)
                    const node = find(saveNodes, (saveNode) => {
                      return saveNode.type === "product-node"
                    });
                    if (node) {
                      setProductCategory(node.data.value)
                    }
                    setModelType(response.data.modelType);
                  }
                  else {
                    createDefaultWorkflow()
                  }
         
                }
                catch (error) {
                  createDefaultWorkflow()
                }
       
            }
        })
    }
  }, [])

  // useEffect(() => {
  //   if (instance.current && data) {
  //       instance.current.fromJSON(data);
  //   }
  // }, [instance.current, data])
  return (
    <ContentPanel>
      <div className={styles.header}>
      <div className={styles.form}>
        <div className={styles.formItemRow}>
          <div>
            Approval Type:
            <Select defaultValue={0} className={styles.select}>
              <Select.Option value={0}>Vendor Application</Select.Option>
            </Select>
          </div>  
          <div>
            Approval Details:
            <Select className={styles.select} value={modelType} onChange={(value) => {
                setModelType(value);
                setNodes((data: any) => {
                    if (data) {
                        const newData = [...data];
                        const node = find(newData, (item) => {
                            return item.type == "start"
                        })
                        if (node) {
                            node.data = {
                              value: value,
                              label: MODEL_TYPE[value]
                            }
                        }
                        return newData;
                    }
                    return data;
                })
            }}>
                {MODEL_TYPE.map((value, index) => {
                    return  <Select.Option key={index} value={index}>{value}</Select.Option>
                })}
             
           
            </Select>
          </div>
        </div>
        <div className={styles.formItemRow}>
          <div>
            Product Category:
            <Select defaultValue={0} className={styles.select} value={productCategory} onChange={(value) => {
                setProductCategory(value);
                setNodes((data: any) => {
                  if (data) {
                      const newData = [...data];
                      const node = find(newData, (item) => {
                          return item.type == "product-node"
                      })
                      if (node) {
                          node.data = {
                            value: value,
                            label: PRODUCT_CATEGORYS[value]
                          }
                      }
                      return newData;
                  }
                  return data;
              })
            }}>
                {
                    PRODUCT_CATEGORYS.map((value, index) => {
                        return  <Select.Option key={index} value={index}>{value}</Select.Option>
                    })
                }
            </Select> 
          </div>
          <div>
            Product Details:
            <Select defaultValue={0} className={styles.select}></Select>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button size="large" type="primary" onClick={() => {
            save()
        }}>Save</Button>
         <Button size="large" type="primary" onClick={() => {
            start()
        }}>Start</Button>
      </div>
      </div>
     

  
      <WorkflowGraphEditor nodes={nodes} onChange={(newNodes) => {
        setNodes(newNodes)
      }}></WorkflowGraphEditor>
 
     
    </ContentPanel>
  );
};

export default ApprovalWorkflowEdit;
