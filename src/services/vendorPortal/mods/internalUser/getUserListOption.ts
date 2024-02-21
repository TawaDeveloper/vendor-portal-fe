/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getUserListOptionOptions = Record<string, any>;

export type getUserListOptionResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.UserListOptionVO>
>;

/**
 * @desc 查询用户列表条件选项
 */
export function request(
  options?: getUserListOptionOptions,
): getUserListOptionResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/internal/user/list/option';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
