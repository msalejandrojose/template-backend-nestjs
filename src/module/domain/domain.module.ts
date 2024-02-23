import { DynamicModule, Module } from "@nestjs/common";
import { PrismaService } from "src/core/infrastructure/database/prisma/PrismaService";
import { PRISMA_REPOSITORY_SERVICE, getPrismaApi } from "./DomainFactory";
import { PRISMA_REPOSITORY, prismaDbRepository } from "../infrastructure/InfrastructureFactory";
import { Service } from "src/core/domain/model/Service";
import { PrismaRepository } from "src/core/infrastructure/adapter/database/PrismaRepository";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { Model } from "src/core/domain/model/Model";

@Module({})
export class DomainModule {
    static register(): DynamicModule {
        return {
            module: DomainModule,
            imports: [
            ],
            providers: [
                PrismaService,
                getPrismaApi,
                prismaDbRepository,
                Model,
            ],
            controllers: [],
            exports: [
                PRISMA_REPOSITORY_SERVICE,
            ]
        };
    }
}