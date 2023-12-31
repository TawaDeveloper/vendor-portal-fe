import Cookies from 'js-cookie';
import { useCallback, useState } from 'react';

import { isFunction } from 'lodash-es';

export type TCookieState = string | undefined | null;
export type TCookieOptions = Cookies.CookieAttributes;

export interface IOptions extends TCookieOptions {
  defaultValue?: TCookieState | (() => TCookieState);
}

function useCookieState(cookieKey: string, options: IOptions = {}) {
  const [state, setState] = useState<TCookieState>(() => {
    const cookieValue = Cookies.get(cookieKey);
    if (typeof cookieValue === 'string') return cookieValue;

    if (isFunction(options.defaultValue)) {
      // @ts-ignore
      return options.defaultValue();
    }
    return options.defaultValue;
  });

  // usePersistFn 保证返回的 updateState 不会变化
  const updateState = useCallback(
    (
      newValue?: TCookieState | ((prevState: TCookieState) => TCookieState),
      newOptions: Cookies.CookieAttributes = {},
    ) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { defaultValue = '', ...restOptions } = {
        ...options,
        ...newOptions,
      };
      setState((prevState: TCookieState): TCookieState => {
        // @ts-ignore
        const value = isFunction(newValue) ? newValue(prevState) : newValue;
        if (value === undefined || value === null) {
          Cookies.remove(cookieKey);
        } else {
          Cookies.set(cookieKey, value, restOptions);
        }
        return value;
      });
    },
    [cookieKey, options],
  );

  return [state, updateState] as const;
}

export default useCookieState;
