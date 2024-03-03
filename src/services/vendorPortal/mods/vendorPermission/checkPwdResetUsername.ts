/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type checkPwdResetUsernameParam = {
  /** username */
  username: string;
};
export type checkPwdResetUsernameOptions = Record<string, any>;

export type checkPwdResetUsernameResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.CheckPwdResetUsernameVO>
>;

/**
 * @desc 重置密码 - 验证用户名
 */
export function request(
  params: checkPwdResetUsernameParam,
  options?: checkPwdResetUsernameOptions,
): checkPwdResetUsernameResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/vendor/permission/pwd/reset/username/check';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
