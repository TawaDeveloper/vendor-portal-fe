import React, { lazy } from 'react';
import type { MenuDataItem } from '@ant-design/pro-layout';
import { accessManagement, vendorPanels, baseRoutes } from './routes';
import VendorApprovalIcon from '@/assets/vender_approval.png';
import AccessManagementIcon from '@/assets/access_manage.png';
const SecurityLayout = lazy(() => import('@/layouts/SecurityLayout'));

/** 👇🏻路由配置的接口类型 */
export interface DynamicRouteType extends MenuDataItem {
  path?: string;
  /** 翻译失败后 则采用name配置值,如无需全球化直接使用中文即可 */
  name: string;
  /** @/config/icons里配置的图标,小写也可以 */
  icon?: string | React.ReactElement;
  /** @/config/access里可配置静态策略。权限入口在@/config/pages里 */
  access?: string;
  /** 非动态的有page属性的路由，会默认显示在sideMmenu里 */
  component?: React.FC<any>;
  children?: DynamicRouteType[];
  parentCode?: string;
  fullPath?: string;
}

export interface StaticRouteType extends MenuDataItem {
  path: string;
  /** 翻译失败后 则采用name配置值,如无需全球化直接使用中文即可 */
  name: string;
  code: string;
  /** @/config/icons里配置的图标,小写也可以 */
  icon?: string | React.ReactElement;
  /** @/config/access里可配置静态策略。权限入口在@/config/pages里 */
  /** 非动态的有page属性的路由，会默认显示在sideMmenu里 */
  component?: React.FC<any>;
  children?: StaticRouteType[];
  fullPath?: string;
}

const ImageIcon = ({ url }: { url: any }) => {
  return (
    <img
      height={22}
      style={{ marginRight: 11 }}
      src={url}
      className="icon"
      alt=""
    />
  );
};

// use a request result to instead it.
const menuTabs: StaticRouteType[] = [
  // {
  //   name: 'menus.top.vendor',
  //   path: '/vendor',
  //   icon: <EditOutlined />,
  //   children: vendorManagementMenu,
  //   code: 'menu:Vendor Portal',
  //   component: SecurityLayout,
  //   skipAuthentication: true,
  // },
  {
    name: 'menus.top.vendorApproval',
    path: '/vendorApproval',
    icon: <ImageIcon url={VendorApprovalIcon} />,
    children: vendorPanels,
    code: 'menu:Vendor Approval',
    component: SecurityLayout,
    skipAuthentication: true,
  },
  {
    name: 'menus.top.access',
    path: '/access',
    icon: <ImageIcon url={AccessManagementIcon} />,
    children: accessManagement,
    code: 'menu:Access Management',
    component: SecurityLayout,
    skipAuthentication: true,
  },
];

const routes = [...menuTabs, ...baseRoutes];

export { menuTabs, baseRoutes, routes };
