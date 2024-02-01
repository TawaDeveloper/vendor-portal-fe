/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getUserInfoOptions = Record<string, any>;

export type getUserInfoResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.UserInfoVO>
>;

/**
 * @desc 查询用户信息
 */
export function request(options?: getUserInfoOptions): getUserInfoResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/internal/permission/user/info';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
