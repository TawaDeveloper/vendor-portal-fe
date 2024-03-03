/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type tmpLoginBody = defs.vendorPortal.TmpLoginDTO;
export type tmpLoginOptions = Record<string, any>;

export type tmpLoginResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.TmpLoginVO>
>;

/**
 * @desc 登录 - 临时用户
 */
export function request(
  body: tmpLoginBody,
  options?: tmpLoginOptions,
): tmpLoginResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/vendor/permission/tmp/login';
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
