import React, { Suspense, useState } from 'react';
import ProLayout, { ProBreadcrumb } from '@ant-design/pro-layout';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import NProgress from 'nprogress';
import { t } from 'i18next';
import 'nprogress/nprogress.css';

import type { MenuDataItem } from '@ant-design/pro-layout';
import { useRecoilValue } from 'recoil';

import { RightContent } from '@/components/GlobalHeader';
import { PageLoading } from '@/components';
import { menuTabs } from '@/config/router';

import slogan from '@/assets/tawa.png';
import logo from '@/assets/99-logo.png';
import styles from './BasicLayout.less';
import { loginStateAtom } from '@/atoms/login';
import NotFoundError from '@/pages/NotFound';

NProgress.configure({ showSpinner: false });

const BasicLayout: React.FC = () => {
  const navigate = useNavigate();
  const { routes, indexPath, routesFlat } = useRecoilValue(loginStateAtom);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const accessed = routesFlat.some(({ fullPath = '' }) =>
    location.pathname.includes(fullPath),
  );
  const menuData = routes.filter((route) => !route.hideInMenu);
  return (
    <ProLayout
      location={{
        pathname: location.pathname,
      }}
      fixedHeader
      navTheme="light"
      fixSiderbar
      siderWidth={232}
      pageTitleRender={(_, title) => t(title || '')}
      menuDataRender={() => menuData.map((r) => ({ ...r, name: t(r.name) }))}
      menuItemRender={(item: MenuDataItem) => (
        <div
          onClick={() => {
            NProgress.start();
            navigate(item.path || '', { replace: true });
            NProgress.done();
          }}
          title={t(item.name ?? '')}
        >
          {t<string>(item.name ?? '')}
        </div>
      )}
      menuHeaderRender={() => (
        <div
          id="customize_menu_header"
          className={styles.logo}
          onClick={() => {
            navigate(indexPath, { replace: true });
          }}
        >
          <img src={collapsed ? logo : slogan} alt="logo" />
        </div>
      )}
      rightContentRender={() => <RightContent />}
      onCollapse={setCollapsed}
      // headerContentRender={() => <ProBreadcrumb />}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: t<string>('link.common.homePage'),
        },
        ...routers.map((router: any) => {
          const isIncluded = menuTabs.find((menu) => menu.path === router.path)
            ?.children?.[0].path;
          const path = isIncluded
            ? `${
                menuTabs.find((menu) => menu.path === router.path)
                  ?.children?.[0].path
              }`
            : router.path;

          return {
            ...router,
            breadcrumbName: t(router.breadcrumbName),
            path,
          };
        }),
      ]}
      contentStyle={{ margin: '16px' }}
    >
      <Suspense fallback={<PageLoading />}>
        <div
          className={styles.proLayoutDiv}
          style={{ minHeight: 'calc(100vh - 80px)' }}
        >
          {accessed ? <Outlet /> : <NotFoundError />}
        </div>
      </Suspense>
    </ProLayout>
  );
};

export default BasicLayout;
