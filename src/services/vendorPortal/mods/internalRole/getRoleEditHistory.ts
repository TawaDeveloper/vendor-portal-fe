/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getRoleEditHistoryParam = {
  /** roleId */
  roleId: number;
};
export type getRoleEditHistoryOptions = Record<string, any>;

export type getRoleEditHistoryResponse = Promise<
  defs.vendorPortal.Response<Array<defs.vendorPortal.EditHistoryItem>>
>;

/**
 * @desc 查询角色编辑历史
 */
export function request(
  params: getRoleEditHistoryParam,
  options?: getRoleEditHistoryOptions,
): getRoleEditHistoryResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/internal/role/edit/history';
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
