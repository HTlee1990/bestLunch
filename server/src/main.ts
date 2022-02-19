import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const requestIp = require('request-ip');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  app.use(requestIp.mw());
  app.enableCors({ origin: 'http://localhost:8080', credentials: true });
  await app.listen(3000);
}
bootstrap();
