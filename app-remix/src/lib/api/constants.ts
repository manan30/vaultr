export const getOrigin = () => {
  if (process.env.NODE_ENV === 'development') return 'http://localhost:2130';
  return process.env.PROD_SERVICE_URL;
};

export const createBasePrefix = (path: string) => `${getOrigin()}/api/${path}`;
