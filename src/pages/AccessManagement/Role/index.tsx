import { useRef, useState } from 'react';
import MarioListContent from '@tawa/mario-list-content';
import { useRequest } from 'ahooks';
import { TableQueryActions } from '@tawa/mario-hooks/lib/useTableQuery';
import { t } from 'i18next';

import ContentPanel from '@/components/ContentPanel';
import { vendorPortalAPI } from '@/services';
import { formFields, tableFields } from './fields';
import OptPermissionDialog from './OptPermissionDialog';
import DataPermissionDialog from './DataPermissionDialog';
import PersonListDialog from './PersonListDialog';

const RolePermissionSetting = () => {
  const actionRef = useRef<TableQueryActions>(null);
  const [currentOptRole, setCurrenOptRole] =
    useState<defs.tawa.PageRoleResponse | null>(null);
  const [currentDataRole, setCurrenDataRole] =
    useState<defs.tawa.PageRoleResponse | null>(null);
  const [currentUserListRole, setCurrenUserListRole] =
    useState<defs.tawa.PageRoleResponse | null>(null);
  const queryRoleList = (params: defs.tawa.PageRoleRequest) => {
    const { pageNum = 1, pageSize = 20 } = params || {};

    return vendorPortalAPI.internalRole.getRoleListForPage.request({
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
    nextFields: [
      {
        key: 'userCount',
        name: t<string>(`pages.rolePermissionSetting.userNum`),
        render: (_value: any, _record: any) => {
          if (_value) {
            return (
              <a
                onClick={() => {
                  setCurrenUserListRole(_record);
                }}
              >
                {_value}
              </a>
            );
          }
          return '--';
        },
      },
      {
        key: 'operationPermission',
        name: t<string>(`pages.rolePermissionSetting.operationPermission`),
        width: 120,
        type: 'action',
        props: (_: any, record: any) => ({
          options: [
            {
              name: t<string>(`pages.rolePermissionSetting.setting`),
              onClick: () => {
                setCurrenOptRole(record);
              },
            },
          ],
        }),
      },
    
      // {
      //   key: 'action',
      //   name: t<string>(`pages.rolePermissionSetting.action`),
      //   width: 120,
      //   type: 'action',
      //   props: (_: any, record: any) => ({
      //     options: [
      //       {
      //         name:
      //           record.status === 'ENABLE'
      //             ? t<string>(`pages.rolePermissionSetting.disabled`)
      //             : t<string>(`pages.rolePermissionSetting.enabled`),
      //         onClick: () => {
      //           if (record.status === 'ENABLE') {
      //             setRoleStatus(record, 'DISABLE');
      //           } else {
      //             setRoleStatus(record, 'ENABLE');
      //           }
      //         },
      //       },
      //     ],
      //   }),
      // },
    ],
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
      {currentOptRole && (
        <OptPermissionDialog
          role={currentOptRole}
          onCancel={() => {
            setCurrenOptRole(null);
          }}
        />
      )}
      {currentDataRole && (
        <DataPermissionDialog
          role={currentDataRole}
          onCancel={() => {
            setCurrenDataRole(null);
          }}
        />
      )}
      {currentUserListRole && (
        <PersonListDialog
          role={currentUserListRole}
          onCancel={() => {
            setCurrenUserListRole(null);
          }}
        />
      )}
    </>
  );
};

export default RolePermissionSetting;
