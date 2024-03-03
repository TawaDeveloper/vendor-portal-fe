/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getOptChannelsBody = defs.vendorPortal.ListOtpChannelDTO;
export type getOptChannelsOptions = Record<string, any>;

export type getOptChannelsResponse = Promise<
  defs.vendorPortal.Response<defs.vendorPortal.ListOtpChannelVO>
>;

/**
 * @desc OTP - 查询验证方式
 */
export function request(
  body: getOptChannelsBody,
  options?: getOptChannelsOptions,
): getOptChannelsResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/vendor/permission/otp/channels';
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
