/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getListOptionsOptions = Record<string, any>;

export type getListOptionsResponse = Promise<
  defs.bakery.Response<defs.bakery.OrderListOptionsVO>
>;

/**
 * @desc 订单列表 - 查询条件选项
 */
export function request(
  options?: getListOptionsOptions,
): getListOptionsResponse {
  const host = getEnvHost();
  console.log(host)
  const url = 'http://10.89.24.25:8080' + '/hot-deli-bakery/api/order/list/options';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
