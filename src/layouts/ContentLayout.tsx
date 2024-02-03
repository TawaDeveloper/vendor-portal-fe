import React, { Suspense } from 'react';
import { Outlet, matchRoutes, useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import { useRecoilValue } from 'recoil';
import { loginStateAtom } from '@/atoms/login';
import 'nprogress/nprogress.css';

// import { useRecoilValue } from 'recoil';

import { PageLoading } from '@/components';

import styles from './BasicLayout.less';
// import { loginStateAtom } from '@/atoms/login';
import NotFoundError from '@/pages/NotFound';


NProgress.configure({ showSpinner: false });

const ContentLayout: React.FC = () => {

 
  const { routes } = useRecoilValue(loginStateAtom);
  const location = useLocation();
 // const path = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  const result = matchRoutes(routes, location)
  const accessed = result ? true: false;
  return (
    <Suspense fallback={<PageLoading />}>
      <div
        className={styles.proLayoutDiv}
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        {accessed ? <Outlet /> : <NotFoundError />}
      </div>
    </Suspense>
  );
};

export default ContentLayout;
