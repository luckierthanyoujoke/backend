import { join } from 'node:path';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthMiddleware } from './auth/auth.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { PaymentsModule } from './payments/payments.module';
import { PrismaModule } from './prisma/prisma.module';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import { WebhooksModule } from './webhooks/webhooks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // Local dev: backend/.env. In Docker/Railway, use injected env vars only.
      envFilePath: join(__dirname, '..', '.env'),
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    PrismaModule,
    UsersModule,
    RecipesModule,
    MessagesModule,
    WebhooksModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
