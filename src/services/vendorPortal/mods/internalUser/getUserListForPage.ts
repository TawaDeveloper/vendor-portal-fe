/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getUserListForPageBody = defs.vendorPortal.UserListDTO;
export type getUserListForPageOptions = Record<string, any>;

export type getUserListForPageResponse = Promise<
  defs.vendorPortal.Response<
    defs.vendorPortal.IPage<defs.vendorPortal.UserListItem>
  >
>;

/**
 * @desc 查询用户列表
 */
export function request(
  body: getUserListForPageBody,
  options?: getUserListForPageOptions,
): getUserListForPageResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/internal/user/list/page';
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
