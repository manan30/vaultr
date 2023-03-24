import axios from 'axios';

import { createBasePrefix } from '../constants';
import type { CreateUserPayload, UserModel } from './types';

const USERS_BASE_PREFIX = createBasePrefix('users');

export const createNewUser = async (body: CreateUserPayload) => {
  const response = await axios.post<UserModel>(
    `${USERS_BASE_PREFIX}/create`,
    body
  );

  return response;
};
