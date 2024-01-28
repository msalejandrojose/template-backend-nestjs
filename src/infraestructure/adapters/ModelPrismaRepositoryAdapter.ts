import { IModelRepository } from "src/core/domain/ports/outbound/IModelRepository";
import { Product } from "src/core/domain/entities/Product";
import { PrismaService } from "../database/prisma/PrismaService";
import { CpUser } from "src/core/domain/entities/CpUser";
import { Model } from "src/core/domain/entities/Model";

export class ModelPrismaRepositoryAdapter implements IModelRepository{

    constructor(private database:PrismaService,private model:CpUser) {}

    getOne(objectId: string | number): Promise<false | Object> {
        this.model = new CpUser();
        console.log(this.model.getModel());
        console.log(this.database[this.model.getModel()].findMany());
        console.log("ASD");
        throw new Error("Method not implemented.");
    }
    getOneValue(objectId: string | number, columnName: string): Promise<false | Object> {
        throw new Error("Method not implemented.");
    }
    getOneByFilter(filter: Object, columnNames: string[]): Promise<false | Object> {
        throw new Error("Method not implemented.");
    }
    getOneValueByFilter(filter: Object, columnName: string): Promise<false | Object> {
        throw new Error("Method not implemented.");
    }
    getRows(filter: Object, columnNames: string[]): Promise<[] | Object[]> {
        throw new Error("Method not implemented.");
    }

}