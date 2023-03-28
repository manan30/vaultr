import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { Request } from 'express';
import { Session } from 'src/types/session';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req: Request = context.switchToHttp().getRequest();
    const { session } = req;
    const { cookie, user } = session as unknown as Session;

    console.log({ session, cookie, user });

    if (!session || !cookie || !cookie.expires || !user) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
