import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

/** CORS origin must match the browser `Origin` header exactly (scheme included). */
function corsOriginFromEnv(): string | boolean {
  const raw = process.env.FRONTEND_URL?.trim();
  if (!raw) return true;

  const trimmed = raw.replace(/\/$/, '');
  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  // Hostname only (e.g. frontend.up.railway.app) — browsers send https://… as Origin.
  return `https://${trimmed}`;
}

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
    origin: corsOriginFromEnv(),
    credentials: true,
  });
  const port = Number(process.env.PORT) || 3000;
  const host = process.env.HOST ?? '0.0.0.0';
  await app.listen(port, host);
}
void bootstrap();
