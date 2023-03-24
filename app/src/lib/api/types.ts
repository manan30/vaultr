import type { AxiosError } from 'axios';

export type ResponseError = AxiosError<{
  status: number;
  message: string[];
  error: string;
}>;
