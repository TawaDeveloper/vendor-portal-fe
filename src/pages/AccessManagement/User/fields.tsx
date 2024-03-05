import { t } from 'i18next';
import { ROLE_STATUS_TYPES, enumsObjectToArray } from '@/constants/enums';
// import { timestampToPST } from '@/utils';
//   {
//     "id": 40,
//     "code": "HD003",
//     "applicationId": 4,
//     "applicationName": "HotDeli",
//     "name": "Max",
//     "userNum": 1,
//     "validStartTime": 1693623644000,
//     "validEndTime": 1793502044000,
//     "status": "ENABLE",
//     "updatedTime": 1695697249000,
//     "updatedBy": 10,
//     "updatedByName": "selinaq"
// }
export const tableFields = [
  {
    key: 'id',
    name: 'ID',
  },
  {
    key: 'name',
    name: t<string>(`pages.rolePermissionSetting.userName`),
  },
  {
    key: 'email',
    name: t<string>(`pages.rolePermissionSetting.Email`),
  },
  {
    key: 'departmentNameList',
    name: t<string>(`pages.rolePermissionSetting.departmentNameList`),
    render: (departmentNameList: any) => {
        return departmentNameList.join(",")
    }
  },
  

  {
    key: 'rolNameList',
    name: t<string>(`pages.rolePermissionSetting.rolNameList`),
    render: (roleNameList: any) => {
        return roleNameList.join(",")
    }
  },


  {
    key: 'updatedTime',
    name: t<string>(`pages.rolePermissionSetting.updatedTime`),
    sorter: (a: any, b: any) => (a.updatedTime > b.updatedTime ? 1 : -1),
    type: 'time-pst',
  },
  // {
  //   key: 'status',
  //   name: t<string>(`pages.rolePermissionSetting.status`),
  //   render: (value: string) => {
  //     return ROLE_STATUS_TYPES[value];
  //   },
  // },
  // {
  //   key: 'status',
  //   name: t<string>(`pages.appHomepageBannerConfigManagement.title0015`),
  //   type: 'badge',
  //   props: (value: number) => ({
  //     color: `${value === 1 ? 'geekblue' : '#d9d9d9'}`,
  //     text: `${shelvesStatus[value]}`,
  //   }),
  // },
];

export const formFields = [
  {
    key: 'name',
    name: t<string>(`pages.rolePermissionSetting.roleName`),
  },
  {
    key: 'status',
    name: t<string>(`pages.rolePermissionSetting.status`),
    type: 'select',
    props: () => ({
      options: enumsObjectToArray(ROLE_STATUS_TYPES),
    }),
  },
];
