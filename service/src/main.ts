import { NestFactory } from '@nestjs/core';

import * as session from 'express-session';

import { PrismaService } from './common/services/prisma';
import { PrismaSessionStore } from './common/session/prisma-session-store';
import { RootModule } from './modules/root/module';
import { IS_PRODUCTION, ONE_DAY } from './utils/constants';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  app.setGlobalPrefix('api');

  const prismaService = app.get(PrismaService);

  app.use(
    session({
      // TODO: Use environment variable
      secret: 'my-secret',
      name: 'vaultr.sid',
      cookie: {
        maxAge: ONE_DAY,
        secure: IS_PRODUCTION ? true : false,
        httpOnly: true,
        sameSite: 'lax',
      },
      resave: false,
      saveUninitialized: false,
      store: new PrismaSessionStore(prismaService),
    }),
  );

  await app.listen(2130);
}

bootstrap();
