/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRoleUserListBody = defs.vendorPortal.RoleUserListDTO;
export type getRoleUserListOptions = Record<string, any>;

export type getRoleUserListResponse = Promise<
  defs.vendorPortal.Response<
    defs.vendorPortal.IPage<defs.vendorPortal.RoleUserListItem>
  >
>;

/**
 * @desc 查询角色用户列表
 */
export function request(
  body: getRoleUserListBody,
  options?: getRoleUserListOptions,
): getRoleUserListResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/internal/role/user/list/page';
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
