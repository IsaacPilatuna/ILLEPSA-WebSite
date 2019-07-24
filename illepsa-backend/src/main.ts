import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
//import * as cookieParser from 'cookie-parser'
//import * as session from 'express-session'

//const FileStore = require('session-file-store')(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule) as NestExpressApplication;

  await app.listen(3000);
  //app.use(cookieParser('myCookie'));
  app.enableCors();
}
bootstrap();
