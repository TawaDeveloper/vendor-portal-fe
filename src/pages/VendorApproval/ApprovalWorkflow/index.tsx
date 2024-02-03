
import styles from './index.less';
import ContentPanel from '@/components/ContentPanel';
import { vendorPortalAPI } from '@/services';
import { searchParam } from '@/services/vendorPortal/mods/wkfModel/search';
import MarioListContent from '@tawa/mario-list-content';
import { useRequest } from 'ahooks';
import { Button } from 'antd';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
const MODEL_TYPE = [
  "Screening", "In depth Review", "Existing Vendor", "Vendor Requesting Files"
 
]
const tableFields = [
  {
    key: 'id',
    width: 100,
    name: t<string>(`pages.common.id`),
  },
  {
    key: 'ApprovalType',
    width: 100,
    name: t<string>(`pages.common.ApprovalType`),
    render: () => {
      return "Application"
    }
  },
  {
    key: 'modelType',
    width: 100,
    name: t<string>(`pages.common.ApprovalDetails`),
    render: (value: number) => {
      return MODEL_TYPE[value]
    }
  },
  {
    key: 'Approval Chain',
    width: 100,
    name: t<string>(`pages.common.ApprovalChain`),
    render: () => {
      return <></>
    },
  },
  {
    key: 'createBy',
    width: 100,
    name: t<string>(`pages.common.Updater`),
  },
  {
    key: 'createTime',
    width: 100,
    name: t<string>(`pages.common.createTime`),
  },
 

];

const ApprovalWorkflow = () => {
  const nav = useNavigate();
  const queryModelList = (params: searchParam) => {
    const { pageNumber = 1, pageSize = 20 } = params || {};
    return vendorPortalAPI.wkfModel.search.request({
      ...params,
      pageNumber,
      pageSize,
    });
  };

  const { loading, data, run } = useRequest(queryModelList);

  const tableProps = {
    loading,
    fields: tableFields,
    data: data?.data?.list,
    total: data?.data?.totalSize,
    rowKey: 'id',
   
    nextFields: [
      {
        key: 'Approval Chain',
        name: t<string>(`pages.common.ApprovalChain`),
        render: (_value: any,  _record: any) => {
          return <a onClick={() => {
            nav(`/VendorApproval/ApprovalWorkflowEdit?mode=update&id=${_record.id}`)
          }}>Details</a>
        },
      },
    ],
    pagination: {
      defaultPageSize: 20,
      pageSize: 20,
      pageSizeOptions: [10, 20, 50, 100],
    },
  };

  const formProps = {
    fields: [],
  };

  return (
    <ContentPanel>
    <MarioListContent
      formProps={formProps}
      tableProps={tableProps}
      fetchData={run}
    />
    <div className={styles.buttons}><Button onClick={() => {
      nav("/VendorApproval/ApprovalWorkflowEdit?mode=create")
    }}>Create</Button></div>
    
  </ContentPanel>
  );
};

export default ApprovalWorkflow;
