/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type approveNodeBody = defs.vendorPortal.NodeApproveParam;
export type approveNodeOptions = Record<string, any>;

export type approveNodeResponse = Promise<defs.vendorPortal.Response<boolean>>;

/**
 * @desc approveNode
 */
export function request(
  body: approveNodeBody,
  options?: approveNodeOptions,
): approveNodeResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/api/wkf/procdef/approveNode';
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
