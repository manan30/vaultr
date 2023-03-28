import type { AxiosRequestConfig } from 'axios';

import { axios, createBasePrefix } from '../axios';

const AUTH_BASE_PREFIX = createBasePrefix('auth');

export const isAuthenticated = async (options?: AxiosRequestConfig) => {
  const response = await axios.get<boolean>(
    `${AUTH_BASE_PREFIX}/is-authenticated`,
    options
  );

  return response;
};
