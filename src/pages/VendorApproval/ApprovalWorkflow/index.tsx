
import './index.less';
import ContentPanel from '@/components/ContentPanel';
import { vendorPortalAPI } from '@/services';
import { searchParam } from '@/services/vendorPortal/mods/wkfModel/search';
import MarioListContent from '@tawa/mario-list-content';
import { useRequest } from 'ahooks';
import { Button } from 'antd';
import { t } from 'i18next';
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
    <Button>Create</Button>
  </ContentPanel>
  );
};

export default ApprovalWorkflow;
