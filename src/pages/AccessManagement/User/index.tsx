import { useRef } from 'react';
import MarioListContent from '@tawa/mario-list-content';
import { useRequest } from 'ahooks';
import { TableQueryActions } from '@tawa/mario-hooks/lib/useTableQuery';


import ContentPanel from '@/components/ContentPanel';
import { vendorPortalAPI } from '@/services';
import { formFields, tableFields } from './fields';


const UserSetting = () => {
  const actionRef = useRef<TableQueryActions>(null);
 
  const queryRoleList = (params: defs.tawa.PageRoleRequest) => {
    const { pageNum = 1, pageSize = 20 } = params || {};

    return vendorPortalAPI.internalUser.getUserListForPage.request({
      ...params,
      pageNum,
      pageSize,
    
    });
  };

  const { loading, data, run } = useRequest(queryRoleList);

  const tableProps = {
    loading,
    fields: tableFields,
    data: data?.data?.records,
    total: data?.data?.total,
    rowKey: 'id',
    scroll: { x: 1500 },

    pagination: {
      defaultPageSize: 20,
      pageSize: 20,
      pageSizeOptions: [10, 20, 50, 100],
    },
  };

  const formProps = {
    fields: formFields,
  };

  return (
    <>
      <ContentPanel>
        <MarioListContent
          ref={actionRef}
          formProps={formProps}
          tableProps={tableProps}
          fetchData={run}
        />
      </ContentPanel>

    </>
  );
};

export default UserSetting;
