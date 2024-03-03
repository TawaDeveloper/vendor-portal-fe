/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRolePermissionIdsParam = {
  /** roleId */
  roleId: number;
};
export type getRolePermissionIdsOptions = Record<string, any>;

export type getRolePermissionIdsResponse = Promise<
  defs.vendorPortal.Response<Array<number>>
>;

/**
 * @desc 查询角色权限（子节点 id 列表）
 */
export function request(
  params: getRolePermissionIdsParam,
  options?: getRolePermissionIdsOptions,
): getRolePermissionIdsResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/internal/role/permission/ids';
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
