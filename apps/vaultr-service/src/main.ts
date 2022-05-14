import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/App/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(1741);
}

bootstrap();
