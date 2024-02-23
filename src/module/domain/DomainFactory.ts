import { FactoryProvider } from "@nestjs/common";
import { IRepository } from "src/core/domain/port/outbound/IRepository";
import { PrismaModelService } from "src/core/domain/services/PrismaModelService";
import { PRISMA_REPOSITORY } from "../infrastructure/InfrastructureFactory";
import { Model } from "src/core/domain/model/Model";

export const PRISMA_REPOSITORY_SERVICE = 'PRISMA_REPOSITORY_SERVICE';

export const getPrismaApi: FactoryProvider<IRepository> = {
    provide: PRISMA_REPOSITORY_SERVICE,
    inject: [PRISMA_REPOSITORY],
    useFactory: (repository: IRepository) =>
        new PrismaModelService(repository),
    };