/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { notification } from 'antd';
import { extend } from '@tawa/tawa-request';
import i18n from 'i18next';
import { stringify } from 'qs';
import { omitBy, isNil } from 'lodash-es';
import moment from 'moment';
import 'moment-timezone';

import { DEFAULT_LANGUAGE } from '@/constants';

const caches = new Map();
const TTL = 5 * 60 * 1000;

const isValid = (value: any) => isNil(value);

export const getEnvHost = () => process.env.REACT_APP_API_PATH || '';
export const getEnvTawaHost = () => process.env.REACT_APP_TAWA_PATH || '';
export const cleanObject = (obj: Record<string, any>) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isValid(value)) {
      delete result[key];
    }
  });

  return result;
};

// trim
const trimParams = (params: { [propName: string]: any } = {}) => {
  const trimmedParams = Object.entries(params).map(([key, value]) => {
    if (typeof value === 'string') {
      return [key, value.trim()];
    }

    return [key, value];
  });

  return Object.fromEntries(trimmedParams);
};

// omit valid field
const omitIdentityProps = (config: Record<string, any>) => {
  const { data, params, ...restConfig } = config;
  const finalData =
    data instanceof FormData ? data : trimParams(omitBy(data, isValid));

  return {
    data: Array.isArray(data) ? data : finalData,
    params: trimParams(omitBy(params, isValid)),
    ...restConfig,
  };
};

/**
 * 异常处理程序
 */

const requestHandler = (url: string, options: Record<string, any>) => {
  const token = localStorage.getItem('tawa_sso_token');
  const lang = localStorage.getItem('lang') || DEFAULT_LANGUAGE;

  const query = stringify(options.params);
  const reqPath = `${url}${query ? `?${query}` : ''}`;
  const cache = caches.get(reqPath);

  const useCache = false;
  if (cache && Date.now() - cache.cacheTime <= TTL) {
    // useCache = true;
  }

  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        // token,
        lang,
        'time-pst': moment.tz.guess(),
        'company': 'walong',
      }
    : { lang, 'time-pst': moment.tz.guess(), 'company': 'walong', };

  return {
    url,
    options: {
      ttl: TTL,
      maxCache: 0,
      useCache,
      validateCache: (_: any, requestOptions: Record<string, any>) =>
        requestOptions.method.toLowerCase() === 'get' ||
        requestOptions.method.toLowerCase() === 'post',
      ...omitIdentityProps(options),
      headers: {
        ...options.headers,
        ...headers,
      },
      interceptors: true,
    },
  };
};

const errorHandler = (error: any) => {
  const { code, message } = error;
  if (code !== 0) {
    notification.error({
      message: `${i18n.t<string>('tooltip.common.requestError')} ${code}`,
      description: message,
    });

    if (code === 101013 && !window.location.pathname.includes('/user/login')) {
      window.location.href = `${process.env.REACT_APP_SSO_LOGIN}?redirect=${window.location.href}`;
    }
  } else {
    notification.error({
      description: `${i18n.t<string>(
        'tooltip.common.networkErrorDescription',
      )}`,
      message: `${i18n.t<string>('tooltip.common.networkError')}`,
    });
  }

  return Promise.reject(error);
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler,
  // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.request.use(requestHandler);
request.interceptors.response.use((response: Response) => {
  const { url } = response;
  const contentType = response.headers.get('content-type');
  if (contentType !== 'application/json') {
    return response;
  }
  caches.set(url, {
    cacheTime: Date.now(),
  });
  return new Promise((res, rej) => {
    response
      .clone()
      .json()
      .then((data) => {
        if (data?.code !== 0) {
          rej(data);
        } else {
          res(response);
        }
      }, rej);
  });
});

export default request;
