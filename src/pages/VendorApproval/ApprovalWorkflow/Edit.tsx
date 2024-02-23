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

function getNodeListAndRelationList(nodes: INode[]) {
  const nodeList: any = [];
  const nodeRelationList: any = [];
  for(let i = 0, l = nodes.length; i < l; i++) {
    const node = nodes[i];
    if (node && node.data && node.data.userId) {
      nodeList.push({
        "name": node.id,
        "userIds": `${node.data.userId}`
      })
    }
  }
  if (nodeList.length == 1) {
    nodeList[0].nodeType = 2
  }
  if (nodeList.length == 2) {
    nodeList[0].nodeType = 1;
    nodeList[1].nodeType = 2
  }
  for(let i = 0, l = nodeList.length; i < (l - 1) && l > 1; i++) {
    nodeRelationList.push({
      "sourceNodeName": nodeList[i].name,
      "targetNodeName": nodeList[i + 1].name,
    })
  }
  return {
    nodeList,
    nodeRelationList
  };

}

const ApprovalWorkflowEdit = () => {
  
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const [nodes, setNodes] = useState<INode[]>([])
  const [modelType, setModelType] = useState(0);
  const [productCategory, setProductCategory] = useState(0);
  
  const save = async () => {
    if (mode === "create") {
        const nodeData = getNodeListAndRelationList(nodes);
        vendorPortalAPI.wkfModel.createModel.request({
            name: `${new Date().getTime()}`,
            data: JSON.stringify(nodes),
            modelType,
            nodeList: nodeData.nodeList,
            nodeRelationList: nodeData.nodeRelationList,
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
        const nodeData = getNodeListAndRelationList(nodes);
        vendorPortalAPI.wkfModel.updateModel.request({
            id: Number(searchParams.get("id")),
            data: JSON.stringify(nodes),
            modelType,
            nodeList: nodeData.nodeList,
            nodeRelationList: nodeData.nodeRelationList,
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
