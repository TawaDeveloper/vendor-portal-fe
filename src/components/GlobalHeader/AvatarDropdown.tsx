import React from 'react';
import { Avatar, Menu } from 'antd';
import { useRecoilState } from 'recoil';
import { t } from 'i18next';
import { LogoutOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';

import { vendorPortalAPI } from '@/services';
import { loginStateAtom } from '@/atoms/login';

import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

const AvatarDropdown: React.FC = () => {
  const [login, setLogin] = useRecoilState(loginStateAtom);
  const { runAsync } = useRequest(vendorPortalAPI.internalPermission.getUserInfo.request, {
    manual: true,
  });
  const logout = () => {
    runAsync().then(({ success }) => {
      if (success) {
        localStorage.removeItem('tawa_sso_token');
        localStorage.removeItem('username');
        setLogin({
          ...login,
          isLogin: false,
        });
      }
    });
  };

  const account = login.account
    ? login.account
    : localStorage.getItem('username');

  const menus = [
    {
      key: 'logout',
      label: (
        <div onClick={() => logout()}>
          <LogoutOutlined />
          {t<string>('pages.login.signOut')}
        </div>
      ),
    },
  ];

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} items={menus} />
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar
          size="small"
          className={styles.avatar}
          style={{ backgroundColor: '#8cc8ff', verticalAlign: 'middle' }}
          alt="avatar"
        />
        {account?.includes('@') ? account?.split('@')[0] : account}
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
