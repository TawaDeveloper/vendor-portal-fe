/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type updateModelBody = defs.vendorPortal.ModelCreateParam;
export type updateModelOptions = Record<string, any>;

export type updateModelResponse = Promise<defs.vendorPortal.Response<boolean>>;

/**
 * @desc 更新工单模板
 */
export function request(
  body: updateModelBody,
  options?: updateModelOptions,
): updateModelResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/api/wkf/model/update';
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
