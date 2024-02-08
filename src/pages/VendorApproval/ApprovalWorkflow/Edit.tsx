import { Button, Select, message } from 'antd';
import styles from './Edit.less';
import ContentPanel from '@/components/ContentPanel';
import { useEffect, useRef, useState } from 'react';
import { Graph } from '@antv/x6';
import { useSearchParams } from 'react-router-dom';
import { vendorPortalAPI } from '@/services';
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

const DefaultData = {
    cells: [
        {
            "position": {
                "x": 40,
                "y": 40
            },
            "size": {
                "width": 150,
                "height": 40
            },
            "attrs": {
                "text": {
                    "text": "Vendor Application \n Screening"
                }
            },
            "visible": true,
            "shape": "rect",
            "id": "Approval Type",
            "zIndex": 1
        },
        {
            "position": {
                "x": 40,
                "y": 140
            },
            "size": {
                "width": 150,
                "height": 40
            },
            "attrs": {
                "text": {
                    "text": "Product Category \n Meat"
                }
            },
            "visible": true,
            "shape": "rect",
            "id": "Product Category",
            "zIndex": 1
        },
        {
            "shape": "edge",
            "id": "edge1",
            "source": {
                "cell": "Approval Type"
            },
            "target": {
                "cell": "Product Category"
            },
            "zIndex": 1
        }
    ]
}
const ApprovalWorkflowEdit = () => {
  const instance = useRef<Graph | null>(null);
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const [data, setData] = useState<any>(null);
  const [modelType, setModelType] = useState(0);
  const [productCategory, setProductCategory] = useState(0);
 
  const save = async () => {
    if (mode === "create") {
        vendorPortalAPI.wkfModel.createModel.request({
            name: `${new Date().getTime()}`,
            data: JSON.stringify(instance.current?.toJSON()),
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
    if (mode === "update") {
        vendorPortalAPI.wkfModel.updateModel.request({
            id: Number(searchParams.get("id")),
            data: JSON.stringify(instance.current?.toJSON()),
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
  useEffect(() => {
    const graph = new Graph({
      container: document.getElementById('workflow-edit-contaier') as any,
      background: {
        color: '#F2F7FA',
      },
      grid: {
        visible: true,
        type: 'doubleMesh',
        args: [
          {
            color: '#eee', // 主网格线颜色
            thickness: 1, // 主网格线宽度
          },
          {
            color: '#ddd', // 次网格线颜色
            thickness: 1, // 次网格线宽度
            factor: 4, // 主次网格线间隔
          },
        ],
      },
    });

    instance.current = graph;
  }, []);

  useEffect(() => {
    if (mode == "create") {
        setData(DefaultData)
    }
    if (mode == "update") {
        const modelId = searchParams.get("id");
        vendorPortalAPI.wkfModel.getDetail.request({
            modelId: Number(modelId)
           // modelType: 
        }).then((response) => {
            if (response.success === true && response.data) {
                setData(JSON.parse(response.data.data));
                setModelType(response.data.modelType);
            }
        })
    }
  }, [])

  useEffect(() => {
    if (instance.current && data) {
        instance.current.fromJSON(data);
    }
  }, [instance.current, data])
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
                setData((data: any) => {
                    if (data) {
                        const newData = {...data};
                        const node = find(newData.cells, (item) => {
                            return item.id === "Approval Type";
                        })
                        if (node) {
                            node.attrs.text.text = `Vendor Application \n ${MODEL_TYPE[value]}`
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
                setData((data: any) => {
                    if (data) {
                        const newData = {...data};
                        const node = find(newData.cells, (item) => {
                            return item.id === "Product Category";
                        })
                        if (node) {
                            node.attrs.text.text = `Product Category \n ${PRODUCT_CATEGORYS[value]}`
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
     

      <div
        id="workflow-edit-contaier"
        className={styles.workflowEditContaier}
      ></div>
     
    </ContentPanel>
  );
};

export default ApprovalWorkflowEdit;
