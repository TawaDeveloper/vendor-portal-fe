/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type tmpLogoutOptions = Record<string, any>;

export type tmpLogoutResponse = Promise<defs.vendorPortal.Response<void>>;

/**
 * @desc 退出 - 临时用户
 */
export function request(options?: tmpLogoutOptions): tmpLogoutResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/vendor/permission/tmp/logout';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
