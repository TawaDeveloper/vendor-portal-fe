import { Button, Select, message } from 'antd';
import styles from './Edit.less';
import ContentPanel from '@/components/ContentPanel';
import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { vendorPortalAPI } from '@/services';
// import { find } from 'lodash-es';
import WorkflowGraphEditor from './WorkflowGraphEditor';
import { INode, createUuid } from 'react-flow-builder';
import { find } from 'lodash-es';
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


const ApprovalWorkflowEdit = () => {
  
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const [nodes, setNodes] = useState<INode[]>([])
  const [modelType, setModelType] = useState(0);
  const [productCategory, setProductCategory] = useState(0);
  
  const save = async () => {
    if (mode === "create") {
        vendorPortalAPI.wkfModel.createModel.request({
            name: `${new Date().getTime()}`,
            data: JSON.stringify(nodes),
            modelType,
            nodeList: [],
            nodeRelationList: [],
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
        vendorPortalAPI.wkfModel.updateModel.request({
            id: Number(searchParams.get("id")),
            data: JSON.stringify(nodes),
            modelType,
            nodeList: [],
            nodeRelationList: [],
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
                  if (saveNodes) {
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
      </div>
      </div>
     

  
      <WorkflowGraphEditor nodes={nodes} onChange={(newNodes) => {
        setNodes(newNodes)
      }}></WorkflowGraphEditor>
 
     
    </ContentPanel>
  );
};

export default ApprovalWorkflowEdit;
