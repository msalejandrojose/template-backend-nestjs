import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {InfrastructureModule} from "../module/infrastructure/infrastructure.module";
import {UserService} from "../application/service/user.service";
import {PrismaService} from "../infrastructure/adapter/prisma/PrismaService";
import {UserController} from "../infrastructure/controller/user/user.controller";

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
      ],
      providers:[]
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


// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//     }),
//   ],
//   controllers: [
//       UserController
//   ],
//   providers: [
//       UserService,
//       PrismaService
//   ],
// })
// export class AppModule {}