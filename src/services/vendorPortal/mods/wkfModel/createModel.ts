/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type createModelBody = defs.vendorPortal.ModelCreateParam;
export type createModelOptions = Record<string, any>;

export type createModelResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.CommonReturn>
>;

/**
 * @desc 创建工单模板
 */
export function request(
  body: createModelBody,
  options?: createModelOptions,
): createModelResponse {
  const host = getEnvHost();
  const url = host + '/vendor-portal/api/wkf/model/create';
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
