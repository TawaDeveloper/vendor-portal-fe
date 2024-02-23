/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getTaskRecordParam = {
  /** beginTime */
  beginTime?: string;

  /** endTime */
  endTime?: string;

  /** nodeId */
  nodeId?: number;

  /** operator */
  operator?: string;

  /** procdefId */
  procdefId?: number;

  /** taskType */
  taskType?: number;
};
export type getTaskRecordOptions = Record<string, any>;

export type getTaskRecordResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.CommonReturn>
>;

/**
 * @desc 单流程审批流查看
 */
export function request(
  params: getTaskRecordParam,
  options?: getTaskRecordOptions,
): getTaskRecordResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/api/wkf/procdef/getTaskRecord';
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
