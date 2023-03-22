import { SessionData } from 'express-session';

export type Session = SessionData & {
  user: { id: string; email: string };
};
