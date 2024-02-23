/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getDetailParam = {
  /** procdefId */
  procdefId: number;
};
export type getDetailOptions = Record<string, any>;

export type getDetailResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.WkfProcdefDetailVo>
>;

/**
 * @desc getDetail
 */
export function request(
  params: getDetailParam,
  options?: getDetailOptions,
): getDetailResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/api/wkf/procdef/getDetail';
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
