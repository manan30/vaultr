export type CreateUserPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UserModel = {
  id: string;
  details: { firstName: string; lastName: string; email: string };
};
