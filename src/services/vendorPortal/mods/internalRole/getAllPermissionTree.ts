/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getAllPermissionTreeOptions = Record<string, any>;

export type getAllPermissionTreeResponse = Promise<
  defs.vendorPortal.Response<Array<defs.vendorPortal.PermissionTree>>
>;

/**
 * @desc 查询所有权限树
 */
export function request(
  options?: getAllPermissionTreeOptions,
): getAllPermissionTreeResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/internal/role/permission/tree';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
