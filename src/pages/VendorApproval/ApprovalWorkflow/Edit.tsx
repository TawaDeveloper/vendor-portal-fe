import { Button, Select } from 'antd';
import styles from './Edit.less';
import ContentPanel from '@/components/ContentPanel';
import { useEffect, useRef, useState } from 'react';
import { Graph } from '@antv/x6';
import { useSearchParams } from 'react-router-dom';
import { vendorPortalAPI } from '@/services';
// import { vendorPortalAPI } from '@/services';
// import { searchParam } from '@/services/vendorPortal/mods/wkfModel/search';
// import MarioListContent from '@tawa/mario-list-content';
// import { useRequest } from 'ahooks';
// import { Button } from 'antd';
// import { t } from 'i18next';
// const MODEL_TYPE = [
//   'Screening',
//   'In depth Review',
//   'Existing Vendor',
//   'Vendor Requesting Files',
// ];

const ApprovalWorkflowEdit = () => {
  const instance = useRef<Graph | null>(null);
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const [data, setData] = useState<any>(null);
  const [modelType, setModelType] = useState(0);
  const save = async () => {
    if (mode === "create") {
        vendorPortalAPI.wkfModel.createModel.request({
            name: `${new Date().getTime()}`,
            data: JSON.stringify(instance.current?.toJSON()),
            modelType,
            nodeList: [],
            nodeRelationList: [],
           // modelType: 
        })
    }
    if (mode === "update") {
        vendorPortalAPI.wkfModel.updateModel.request({
            id: Number(searchParams.get("id")),
            modelType,
            nodeList: [],
            nodeRelationList: [],
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
        setData([
            {
              id: 'Approval Type',
              x: 40,
              y: 40,
              width: 150,
              height: 40,
              label: 'Vendor Application \n Screening',
              shape: 'rect',
            },
            {
              id: 'Product Category',
              x: 40,
              y: 140,
              width: 150,
              height: 40,
              label: 'Product Category \n Meat',
              shape: 'rect',
            },
            {
              id: 'edge1',
              source: 'Approval Type',
              target: 'Product Category',
              shape: 'edge',
            },
          ])
    }
    if (mode == "update") {
        const modelId = searchParams.get("id");
        vendorPortalAPI.wkfModel.getDetail.request({
            modelId: Number(modelId)
           // modelType: 
        })
    }
  }, [])

  useEffect(() => {
    if (mode === "create") {
        if (instance.current && data) {
            instance.current.fromJSON(data);
        }
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
            <Select defaultValue={0} className={styles.select} value={modelType} onChange={(value) => {
                setModelType(value)
            }}>
              <Select.Option value={0}>Screening</Select.Option>
              <Select.Option value={1}>In-depth-Review</Select.Option>
              <Select.Option value={2}>Existing Vendor</Select.Option>
              <Select.Option value={3}>Vendor Requesting Files</Select.Option>
            </Select>
          </div>
        </div>
        <div className={styles.formItemRow}>
          <div>
            Product Category:
            <Select defaultValue={0} className={styles.select}>
              <Select.Option value={0}>Meat</Select.Option>
              <Select.Option value={1}>Seafood Produce</Select.Option>
              <Select.Option value={2}>Grocery (Dry)</Select.Option>
              <Select.Option value={3}>Houseware</Select.Option>
            </Select> 
          </div>
          <div>
            Product Details:{' '}
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
