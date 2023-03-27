import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { createBasePrefix } from '../constants';

const AUTH_BASE_PREFIX = createBasePrefix('auth');

export const isAuthenticated = async (options?: AxiosRequestConfig) => {
  const response = await axios.get<boolean>(
    `${AUTH_BASE_PREFIX}/is-authenticated`,
    options
  );

  return response;
};
