import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
// import { useMount } from 'ahooks';
import { PageLoading } from '@ant-design/pro-layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginStateAtom } from '@/atoms/login';
import BasicLayout from './BasicLayout';
import { getPermissionsMenus } from '@/utils/route-utils';
import { bakeryAPI } from '@/services';

// import { backofficeAPI } from '@/services';
// import { PageLoading } from '@/components';
const SecurityLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [login, setLogin] = useRecoilState(loginStateAtom);
  const token = localStorage.getItem('tawa_sso_token');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (token) {
      bakeryAPI.account.userInfo.request().then((res) => {
        if (res.data && res.success) {
          localStorage.setItem('username', res.data.account || '');
          sessionStorage.setItem('bakeryUserInfo', JSON.stringify(res.data));
        }
      });
    }
  }, [token]);
  // useMount(() => {
  //   if (login.isLogin) {
  //     const { routePremiss, filteredMenus } = getPermissionsMenus([]);
  //     setLogin({
  //       ...login,
  //       routes: routePremiss,
  //       indexPath: login.indexPath,
  //       routesFlat: filteredMenus,
  //     });
  //   }
  // });

  useEffect(() => {
    const queryPermissions = async () => {
      if (login.isLogin) {
        setLoading(true);
        const { routePremiss, filteredMenus } = getPermissionsMenus([]);
        console.log('routePremiss: ', routePremiss, filteredMenus);
        // const permissionConfig = await bakeryAPI.account.permission.request();
        // const newRoutePremiss = filterRouterByPermission(
        //   routePremiss,
        //   permissionConfig.data ? permissionConfig.data : [],
        // );
        // const newFilteredMenus = filterMenusByPermission(
        //   filteredMenus,
        //   permissionConfig.data ? permissionConfig.data : [],
        // );
        setLogin({
          ...login,
          routes: routePremiss,
          // permission: permissionConfig.data ? permissionConfig.data : [],
          indexPath: login.indexPath,
          routesFlat: filteredMenus,
        });
        setLoading(false);
      }
    };
    queryPermissions();
  }, [login.isLogin]);

  if (!login.isLogin && location.pathname !== '/user/login') {
    window.location.href = `${process.env.REACT_APP_SSO_LOGIN}?redirect=${window.location.href}`;
    // return <Navigate to={process.env.REACT_APP_SSO_LOGIN + `?redirect=${window.location.href}`} replace />;
  }

  if (location.pathname === '/' && login.indexPath) {
    navigate(login.indexPath, { replace: true });
  }
  if (loading) {
    return <PageLoading />;
  }
  return <BasicLayout />;
};

export default SecurityLayout;
