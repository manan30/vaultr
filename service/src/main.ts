import { NestFactory } from '@nestjs/core';

import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import * as session from 'express-session';

import { PrismaService } from './common/services/prisma';
import { RootModule } from './modules/root/module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  app.setGlobalPrefix('api');

  const prismaService = app.get(PrismaService);

  app.use(
    session({
      secret: 'my-secret',
      // cookie: {
      //   maxAge: 7 * 24 * 60 * 60 * 1000, // ms
      // },
      resave: false,
      saveUninitialized: false,
      store: new PrismaSessionStore(prismaService, {
        dbRecordIdIsSessionId: false,
        dbRecordIdFunction: undefined,
      }),
    }),
  );

  await app.listen(2130);
}

bootstrap();
