import { IModelRepository } from "src/core/domain/ports/outbound/IModelRepository";
import { PrismaService } from "../database/prisma/PrismaService";
import { CpUser } from "src/core/domain/entities/CpUser";
export declare class ModelPrismaRepositoryAdapter implements IModelRepository {
    private database;
    private model;
    constructor(database: PrismaService, model: CpUser);
    getOne(objectId: string | number): Promise<false | Object>;
    getOneValue(objectId: string | number, columnName: string): Promise<false | Object>;
    getOneByFilter(filter: Object, columnNames: string[]): Promise<false | Object>;
    getOneValueByFilter(filter: Object, columnName: string): Promise<false | Object>;
    getRows(filter: Object, columnNames: string[]): Promise<[] | Object[]>;
}
