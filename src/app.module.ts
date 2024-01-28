import { Module } from '@nestjs/common';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    InfraestructureModule,
    ConfigModule.forRoot({
      envFilePath: '.env"',
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
