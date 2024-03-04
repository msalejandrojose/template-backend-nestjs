import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureModule } from './module/infrastructure/infrastructure.module';
import { Model } from './core/domain/model/Model';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Module({})
export class AppModule {
  static forRoot(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        InfrastructureModule.register(),
      ]
    };
  }

  static setupSwagger(app) {
    const config = new DocumentBuilder()
      .setTitle('AJ API')
      .setDescription('Descripción de la API de AJ')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);
  }
}