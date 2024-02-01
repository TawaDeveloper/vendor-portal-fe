/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getDetailParam = {
  /** modelId */
  modelId: number;
};
export type getDetailOptions = Record<string, any>;

export type getDetailResponse = Promise<defs.vendorPortal.Response<ObjectMap>>;

/**
 * @desc getDetail
 */
export function request(
  params: getDetailParam,
  options?: getDetailOptions,
): getDetailResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/api/wkf/model/getDetail';
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
