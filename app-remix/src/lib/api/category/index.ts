import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { createBasePrefix } from '../constants';
import type { Category } from './types';

const CATEGORY_BASE_PREFIX = createBasePrefix('category');

export const getAllCategories = async (options?: AxiosRequestConfig) => {
  const response = await axios.get<Category[]>(
    `${CATEGORY_BASE_PREFIX}/all`,
    options
  );

  return response;
};
