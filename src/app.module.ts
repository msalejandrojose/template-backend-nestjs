import { Module } from '@nestjs/common';
import { InfraestructureModule } from './infraestructure/infraestructure.module';

@Module({
  imports: [InfraestructureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
