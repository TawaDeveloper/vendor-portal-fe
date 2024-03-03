/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type trustLoginDeviceBody = defs.vendorPortal.LoginTrustDeviceDTO;
export type trustLoginDeviceOptions = Record<string, any>;

export type trustLoginDeviceResponse = Promise<
  defs.vendorPortal.Response<void>
>;

/**
 * @desc 登录 - 选择信任设备
 */
export function request(
  body: trustLoginDeviceBody,
  options?: trustLoginDeviceOptions,
): trustLoginDeviceResponse {
  const host = getEnvHost();
  const url = host + '/vendorPortal/vendor/permission/login/device/trust';
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
