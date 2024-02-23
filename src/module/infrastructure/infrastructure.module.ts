import { DynamicModule, Module } from "@nestjs/common";
import { TestController } from "src/core/infrastructure/controller/test.controller";
import { DomainModule } from "../domain/domain.module";
import { PrismaService } from "src/core/infrastructure/database/prisma/PrismaService";
import { PRISMA_REPOSITORY, prismaDbRepository } from "./InfrastructureFactory";
import { PrismaRepository } from "src/core/infrastructure/adapter/database/PrismaRepository";
import { Model } from "src/core/domain/model/Model";

@Module({})
export class InfrastructureModule {
    static register(): DynamicModule {
        return {
            module: InfrastructureModule,
            imports: [
                DomainModule.register()
            ],
            providers: [
                PrismaService,
                prismaDbRepository,
                PrismaRepository,
                Model,
            ],
            controllers: [
                TestController
            ],
            exports: [
                PrismaRepository
            ]
        };
    }
}