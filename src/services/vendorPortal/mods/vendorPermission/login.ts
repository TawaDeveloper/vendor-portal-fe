/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type loginBody = defs.vendorPortal.LoginDTO;
export type loginOptions = Record<string, any>;

export type loginResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.LoginVO>
>;

/**
 * @desc 登录 - 正式用户
 */
export function request(
  body: loginBody,
  options?: loginOptions,
): loginResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/vendor/permission/login';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
