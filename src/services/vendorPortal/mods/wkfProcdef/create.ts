/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createBody = defs.vendorPortal.ProcdefCreateParam;
export type createOptions = Record<string, any>;

export type createResponse = Promise<defs.vendorPortal.Response<number>>;

/**
 * @desc create
 */
export function request(
  body: createBody,
  options?: createOptions,
): createResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/api/wkf/procdef/create';
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
