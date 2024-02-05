import { IModelRepository } from "src/core/domain/ports/outbound/IModelRepository";
import { Product } from "src/core/domain/entities/Product";
import { PrismaService } from "../database/prisma/PrismaService";
import { CpUser } from "src/core/domain/entities/CpUser";
import { Model } from "src/core/domain/entities/Model";

export class ModelPrismaRepositoryAdapter implements IModelRepository{

    constructor(
        public database:PrismaService,
        private model:Model
        ) {}

    async getOne(objectId: string | number): Promise<false | Object> {
        console.log("PrismaService instance:", this.database);
        console.log(await this.database.cpUser.findMany());
        console.log(this.model.getColumnId());
        throw new Error("Method not implemented.");
    }

    //let model = new CpUser();
        //console.log(model.getModel());
        //console.log(this.database.cpUser.findFirst());
        //console.log(await this.database.cpUser.findMany());
        //console.log("ASD");

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