/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRoleListForPageBody = defs.vendorPortal.RoleListDTO;
export type getRoleListForPageOptions = Record<string, any>;

export type getRoleListForPageResponse = Promise<
  defs.vendorPortal.Response<
    defs.vendorPortal.IPage<defs.vendorPortal.RoleListItem>
  >
>;

/**
 * @desc 查询角色列表
 */
export function request(
  body: getRoleListForPageBody,
  options?: getRoleListForPageOptions,
): getRoleListForPageResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/internal/role/list/page';
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
