import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureModule } from './module/infrastructure/infrastructure.module';

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
    };
  }
}