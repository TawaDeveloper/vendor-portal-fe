/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type checkLoginOtpCodeBody = defs.vendorPortal.LoginOtpDTO;
export type checkLoginOtpCodeOptions = Record<string, any>;

export type checkLoginOtpCodeResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.LoginOtpVO>
>;

/**
 * @desc 登录 - 提交 OTP 验证码
 */
export function request(
  body: checkLoginOtpCodeBody,
  options?: checkLoginOtpCodeOptions,
): checkLoginOtpCodeResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/vendor/permission/login/opt/code/check';
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
