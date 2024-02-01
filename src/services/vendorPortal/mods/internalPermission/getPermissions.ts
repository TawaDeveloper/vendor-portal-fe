/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getPermissionsOptions = Record<string, any>;

export type getPermissionsResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.PermissionVO>
>;

/**
 * @desc 查询操作权限
 */
export function request(
  options?: getPermissionsOptions,
): getPermissionsResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/internal/permission/permission';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
