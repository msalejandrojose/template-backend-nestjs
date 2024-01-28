import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

async function bootstrap() {

  // Cargar las variables de entorno del archivo .env si existe
  if (fs.existsSync('.env')) {
    dotenv.config();
    process.env.DATABASE_URL = "mysql://"+process.env.DB_USER+":"+process.env.DB_PASS+"@"+process.env.DB_HOST+":"+process.env.DB_PORT+"/"+process.env.DB_SCHEMA+"";
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
