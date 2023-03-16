import { NestFactory } from '@nestjs/core';
import { RootModule } from './modules/root/module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.setGlobalPrefix('api');
  await app.listen(2130);
}

bootstrap();
