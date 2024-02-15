import { DynamicModule, Module } from "@nestjs/common";
import { TestController } from "src/core/infrastructure/controller/test.controller";
import { DomainModule } from "../domain/domain.module";
import { PrismaService } from "src/core/infrastructure/database/prisma/PrismaService";

@Module({})
export class InfrastructureModule {
    static register(): DynamicModule {
        return {
            module: InfrastructureModule,
            imports: [DomainModule.register()],
            providers: [PrismaService],
            controllers: [
                TestController
            ],
            exports: []
        };
    }
}