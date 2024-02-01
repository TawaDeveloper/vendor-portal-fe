/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type searchParam = {
  /** beginTime */
  beginTime?: string;

  /** endTime */
  endTime?: string;

  /** name */
  name?: string;

  /** pageNumber */
  pageNumber?: number;

  /** pageSize */
  pageSize?: number;

  /** userId */
  userId?: string;
};
export type searchOptions = Record<string, any>;

export type searchResponse = Promise<
  defs.vendorPortal.Response<ObjectMap<string, ObjectMap>>
>;

/**
 * @desc search
 */
export function request(
  params: searchParam,
  options?: searchOptions,
): searchResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/api/wkf/model/search';
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
