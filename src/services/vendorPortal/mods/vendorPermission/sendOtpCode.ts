/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type sendOtpCodeBody = defs.vendorPortal.SendOtpCodeDTO;
export type sendOtpCodeOptions = Record<string, any>;

export type sendOtpCodeResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.SendOtpCodeVO>
>;

/**
 * @desc OTP - 发送验证码
 */
export function request(
  body: sendOtpCodeBody,
  options?: sendOtpCodeOptions,
): sendOtpCodeResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/vendor/permission/otp/code/send';
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
