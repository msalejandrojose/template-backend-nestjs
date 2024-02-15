import { ClassProvider } from "@nestjs/common";
import { IRepository } from "src/core/domain/port/outbound/IRepository";
import { PrismaRepository } from "src/core/infrastructure/adapter/database/PrismaRepository";

export const DB_REPOSITORY = 'DB_REPOSITORY';

export const htmlGeneratorProvider: ClassProvider<IRepository> = {
    provide: DB_REPOSITORY,
    useClass: PrismaRepository,
};