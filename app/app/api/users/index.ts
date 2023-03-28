import type { AxiosRequestConfig } from 'axios';

import { axios, createBasePrefix } from '../axios';
import type { CreateUserPayload, LoginUserPayload, UserModel } from './types';

const USERS_BASE_PREFIX = createBasePrefix('users');

export const createNewUser = async (
  body: CreateUserPayload,
  options?: AxiosRequestConfig
) => {
  const response = await axios.post<UserModel>(
    `${USERS_BASE_PREFIX}/create`,
    body,
    options
  );

  return response;
};

export const loginUser = async (
  body: LoginUserPayload,
  options?: AxiosRequestConfig
) => {
  const response = await axios.post<UserModel>(
    `${USERS_BASE_PREFIX}/login`,
    body,
    options
  );

  return response;
};
