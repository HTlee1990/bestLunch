import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

const requestIp = require('request-ip');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');

  const configService = app.get(ConfigService);
  app.use(requestIp.mw());
  app.use(cookieParser());
  app.enableCors({ origin: configService.get('FRONT'), credentials: true });
  await app.listen(3000);
}
bootstrap();
