/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type saveRolePermissionIdsBody = defs.vendorPortal.SaveRolePermissionDTO;
export type saveRolePermissionIdsOptions = Record<string, any>;

export type saveRolePermissionIdsResponse = Promise<
  defs.vendorPortal.Response<void>
>;

/**
 * @desc 保存角色权限
 */
export function request(
  body: saveRolePermissionIdsBody,
  options?: saveRolePermissionIdsOptions,
): saveRolePermissionIdsResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/internal/role/permission/save';
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
