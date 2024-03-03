/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type checkPwdResetOptCodeBody = defs.vendorPortal.PwdResetOtpDTO;
export type checkPwdResetOptCodeOptions = Record<string, any>;

export type checkPwdResetOptCodeResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.PwdResetOtpVO>
>;

/**
 * @desc 重置密码 - 提交 OTP 验证码
 */
export function request(
  body: checkPwdResetOptCodeBody,
  options?: checkPwdResetOptCodeOptions,
): checkPwdResetOptCodeResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/vendor/permission/pwd/reset/otp/code/check';
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
