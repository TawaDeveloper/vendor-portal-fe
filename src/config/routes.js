import { lazy } from 'react';

const UserLogin = lazy(() =>
  import(/* webpackChunkName: "login" */ '@/pages/user/login'),
);
const ForgetPassword = lazy(() =>
  import(/* webpackChunkName: "login" */ '@/pages/user/forget-password'),
);
const SecurityLayout = lazy(() =>
  import(/* webpackChunkName: "SecurityLayout" */ '@/layouts/SecurityLayout'),
);
const UserLayout = lazy(() =>
  import(/* webpackChunkName: "UserLayout" */ '@/layouts/UserLayout'),
);

// const Account = lazy(() =>
//   import(/* webpackChunkName: "Account" */ '@/pages/Permission/Account'),
// );
// // const RolePermissions = lazy(() =>
// //   import(/* webpackChunkName: "RolePermissions" */ '@/pages/Permission/Role'),
// // );
// const Organization = lazy(() =>
//   import(
//     /* webpackChunkName: "Organization" */ '@/pages/Permission/Organization'
//   ),
// );
// const Menu = lazy(() =>
//   import(/* webpackChunkName: "Menu" */ '@/pages/Permission/Menu'),
// );
const SalesTargetSetting = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/SalesTargetSetting/List'),
);
const ReportByStore = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/SalesReport/ReportByStore'),
);
const ReportByProduct = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/SalesReport/ReportByProduct'),
);
const ReportByCategory = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/SalesReport/ReportByCategory'),
);
const LossFactor = lazy(() =>
  import(/* webpackChunkName: "Menu" */ '@/pages/Setting/LossFactor'),
);

const RolePermissionSetting = lazy(() =>
  import(
    /* webpackChunkName: "Menu" */ '@/pages/Setting/RolePermissionSetting'
  ),
);

const Ghost = lazy(() =>
  import(/* webpackChunkName: "Ghost" */ '@/pages/Ghost'),
);
const BusinessInfomation = lazy(() =>
  import(
    /* webpackChunkName: "Ghost" */ '@/pages/VendorManagement/BusinessInfomation'
  ),
);
const RoleManagement = lazy(() =>
  import(/* webpackChunkName: "Ghost" */ '@/pages/AccessManagement/Role'),
);
const UserManagement = lazy(() =>
  import(/* webpackChunkName: "Ghost" */ '@/pages/AccessManagement/User'),
);
const ApprovalCenter = lazy(() =>
  import(
    /* webpackChunkName: "Ghost" */ '@/pages/VendorApproval/ApprovalCenter'
  ),
);
const ApprovalWorkflow = lazy(() =>
  import(
    /* webpackChunkName: "Ghost" */ '@/pages/VendorApproval/ApprovalWorkflow'
  ),
);
const ApprovalDate = lazy(() =>
  import(/* webpackChunkName: "Ghost" */ '@/pages/VendorApproval/ApprovalDate'),
);

const baseRoutes = [
  {
    name: 'all',
    path: '*',
    hideInMenu: true,
    component: SecurityLayout,
  },
  {
    path: '/',
    name: 'index',
    component: SecurityLayout,
  },
  {
    path: '/ghost',
    name: 'ghost',
    component: Ghost,
  },
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    children: [
      {
        path: 'forget-password',
        name: 'forget-password',
        component: ForgetPassword,
      },
      {
        path: 'login',
        name: 'login',
        component: UserLogin,
      },
    ],
  },
];

// const vendorManagementMenu = [
//   {
//     path: 'infomation',
//     name: 'menus.top.infomation',
//     component: BusinessInfomation,
//     code: 'menu:Business Infomation',
//     parentCode: 'menu:Vendor',
//     skipAuthentication: true,
//   },
//   {
//     path: 'account',
//     name: 'menus.top.account',
//     component: Account,
//     code: 'menu:Account Management',
//     parentCode: 'menu:Vendor',
//     skipAuthentication: true,
//   },
//   {
//     path: 'locations',
//     name: 'menus.top.locations',
//     component: Locations,
//     code: 'menu:Locations',
//     parentCode: 'menu:Vendor',
//     skipAuthentication: true,
//   },
// ];

const vendorPanels = [
  {
    path: 'approvalCenter',
    name: 'menus.top.approvalCenter',
    component: ApprovalCenter,
    code: 'menu:Approval Center',
    parentCode: 'menu:Vendor Approval',
    skipAuthentication: true,
  },
  {
    path: 'approvalWorkflow',
    name: 'menus.top.approvalWorkflow',
    component: ApprovalWorkflow,
    code: 'menu:Approval Workflow',
    parentCode: 'menu:Vendor Approval',
    skipAuthentication: true,
  },
  {
    path: 'approvalDate',
    name: 'menus.top.approvalDate',
    component: ApprovalDate,
    code: 'menu:Approval Date',
    parentCode: 'menu:Vendor Approval',
    skipAuthentication: true,
  },
];
const accessManagement = [
  {
    path: 'org',
    name: 'menus.top.orgManagement',
    component: RoleManagement,
    code: 'menu:Organization Management',
    parentCode: 'menu:Access Management',
    skipAuthentication: true,
  },
  {
    path: 'role',
    name: 'menus.top.roleManagement',
    component: RoleManagement,
    code: 'menu:Role Management',
    parentCode: 'menu:Access Management',
    skipAuthentication: true,
  },
  {
    path: 'user',
    name: 'menus.top.userManagement',
    component: UserManagement,
    code: 'menu:User Management',
    parentCode: 'menu:Access Management',
    skipAuthentication: true,
  },
];
export { vendorPanels, accessManagement, baseRoutes };
