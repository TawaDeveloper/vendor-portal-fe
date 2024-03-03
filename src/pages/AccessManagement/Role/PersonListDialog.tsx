import { Modal } from 'antd';
import { useRef } from 'react';
import MarioListContent from '@tawa/mario-list-content';
import { useRequest } from 'ahooks';
import { TableQueryActions } from '@tawa/mario-hooks/lib/useTableQuery';
import Title from 'antd/lib/typography/Title';
import { t } from 'i18next';
import { tawaAPI, vendorPortalAPI } from '@/services';
import usePermission from '@/hooks/usePermission';

const tableFields = [
  {
    key: 'userId',
    name: 'ID',
  },
  {
    key: 'account',
    name: t<string>(`pages.rolePermissionSetting.account`),
  },
  {
    key: 'name',
    name: t<string>(`pages.rolePermissionSetting.accountName`),
  },
  {
    key: 'lastLoginTime',
    name: t<string>(`pages.rolePermissionSetting.lastLoginTime`),
    sorter: (a: any, b: any) => (a.lastLoginTime > b.lastLoginTime ? 1 : -1),
    type: 'time-pst',
  },
];
const formFields = [
  {
    key: 'account',
    name: t<string>(`pages.rolePermissionSetting.account`),
    width: 300,
  },
];
// {
//     "userId": 13,
//     "roleId": 39,
//     "account": "39759",
//     "name": "William  Wong",
//     "lastLoginTime": 1695694727000
// }
const PersonListDialog = ({
  role,
  onCancel,
}: {
  role: defs.tawa.PageRoleResponse;
  onCancel: () => void;
}) => {
  const actionRef = useRef<TableQueryActions>(null);
  const isCanUpdatePermission = usePermission(
    'component:Setting:Update Permissions',
  );
  const queryUserList = (params: defs.tawa.PageRoleRequest) => {
    const { pageNum = 1, pageSize = 20 } = params || {};

    return vendorPortalAPI.internalRole.getRoleUserList.request({
      ...params,
      pageNum,
      pageSize,
      roleId: Number(role.id),
    });
  };

  const { loading, data, run } = useRequest(queryUserList);
  const removeUser = async (user: defs.tawa.PageRuleUserResponse) => {
    await tawaAPI.permRole.removeUser.request({
      roleId: Number(user.roleId),
      userId: Number(user.userId),
    });
    run({});
  };
  const tableProps = {
    loading,
    fields: tableFields,
    data: data?.data?.records,
    total: data?.data?.total,
    rowKey: 'userId',
    nextFields: isCanUpdatePermission
      ? [
          {
            key: 'action',
            name: t<string>(`pages.rolePermissionSetting.action`),
            width: 120,
            type: 'action',
            props: (_: any, record: any) => ({
              options: [
                {
                  name: t<string>(`pages.rolePermissionSetting.delete`),
                  onClick: () => {
                    removeUser(record);
                  },
                },
              ],
            }),
          },
        ]
      : [],
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
    <Modal
      width={800}
      title={t<string>('pages.rolePermissionSetting.viewRelatedPersonDetails')}
      open
      onCancel={onCancel}
      onOk={onCancel}
    >
      <Title level={5}>
        {t<string>('pages.rolePermissionSetting.roleName')}: {role.name}
      </Title>
      <MarioListContent
        ref={actionRef}
        formProps={formProps}
        tableProps={tableProps}
        fetchData={run}
      />
    </Modal>
  );
};

export default PersonListDialog;
