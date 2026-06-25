import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.enableShutdownHooks();
  app.enableCors({
    origin: process.env.FRONTEND_URL ?? true,
    credentials: true,
  });
  const port = Number(process.env.PORT) || 3000;
  const host = process.env.HOST ?? '0.0.0.0';
  await app.listen(port, host);
}
void bootstrap();
