import { NestFactory } from '@nestjs/core';
import {AppModule} from "./launcher/app.module";
import cookieParser from 'cookie-parser'; // <- Usa importación por defecto

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot());

  app.use(cookieParser());

  await app.listen(3000);
}
bootstrap();
