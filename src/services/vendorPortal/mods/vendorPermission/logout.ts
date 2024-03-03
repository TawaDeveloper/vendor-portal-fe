/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type logoutOptions = Record<string, any>;

export type logoutResponse = Promise<defs.vendorPortal.Response<void>>;

/**
 * @desc 退出 - 正式用户
 */
export function request(options?: logoutOptions): logoutResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/vendor/permission/logout';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
