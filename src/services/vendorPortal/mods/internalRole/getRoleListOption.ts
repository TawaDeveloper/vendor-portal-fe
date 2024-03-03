/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRoleListOptionOptions = Record<string, any>;

export type getRoleListOptionResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.RoleListOptionVO>
>;

/**
 * @desc 查询角色列表条件选项
 */
export function request(
  options?: getRoleListOptionOptions,
): getRoleListOptionResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/internal/role/list/option';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
