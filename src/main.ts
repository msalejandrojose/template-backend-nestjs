import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './config';

async function bootstrap() {
  Config.setConfig();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
