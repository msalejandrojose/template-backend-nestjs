import { ClassProvider } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { IRepository } from "src/core/domain/port/outbound/IRepository";
import { PrismaRepository } from "src/core/infrastructure/adapter/database/PrismaRepository";
import { PrismaService } from "src/core/infrastructure/database/prisma/PrismaService";

export const PRISMA_REPOSITORY = 'PRISMA_REPOSITORY';

export const prismaDbRepository: ClassProvider<IRepository> = {
    provide: PRISMA_REPOSITORY,
    useClass: PrismaRepository,
};