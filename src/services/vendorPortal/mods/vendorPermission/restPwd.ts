/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type restPwdBody = defs.vendorPortal.PwdResetDTO;
export type restPwdOptions = Record<string, any>;

export type restPwdResponse = Promise<defs.vendorPortal.Response<void>>;

/**
 * @desc 重置密码
 */
export function request(
  body: restPwdBody,
  options?: restPwdOptions,
): restPwdResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/vendor/permission/pwd/reset';
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
