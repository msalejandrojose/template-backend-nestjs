import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { Model } from "src/core/domain/model/Model";
import { IRepository } from "src/core/domain/port/outbound/IRepository";
import { PrismaService } from "../../database/prisma/PrismaService";
import { PrismaClient } from "@prisma/client";
import { Field } from "src/core/domain/database/Field";
import { Filter } from "src/core/domain/database/Filter";
import { Limit } from "src/core/domain/database/Limit";
import { Order } from "src/core/domain/database/Order";
import { Query } from "./dtos/Query";

//@Injectable()
export class PrismaRepository implements IRepository {
    protected prismaService: PrismaClient;
    constructor(private readonly model: Model<Object>) {
        this.prismaService = new PrismaService()
    }

    private getPrismaServiceTable() {
        return this.prismaService[this.model.getTableName()]
    }

    async getOne(objectId: string) {
        return await this.getPrismaServiceTable().findUnique({ where: { [this.model.getPrimaryKey()]: objectId } });
    }

    getOneValue(objectId: string | number, field: string, order?: Order) {
        throw new Error("Method not implemented.");
    }
    getOneByFilter(filter: Filter, field?: string | number, order?: Order) {
        throw new Error("Method not implemented.");
    }
    getOneValueByFilter(filter: Filter, field: string | number, order?: Order) {
        throw new Error("Method not implemented.");
    }
    async getRows(fields?: Field, filter?: Filter, order?: Order, limit?: Limit) {
        //return new Query(fields,filter,order,limit,this.model.getInnerJoins());
        return await this.getPrismaServiceTable().findMany(new Query(fields,filter,order,limit,this.model.getInnerJoins()));
    }
    getRowCount(filter?: Filter) {
        throw new Error("Method not implemented.");
    }
    async insertRow(data: Object) {
        return await this.getPrismaServiceTable().create({ data: data });
    }
    insertRows(datas: Object[]) {
        const insertPromises = datas.map((item) => this.insertRow(item));
        return insertPromises;
    }
    updateRow(objectId: string | number, data: Object) {
        throw new Error("Method not implemented.");
    }
    updateRows(filter: Filter, data: Object) {
        throw new Error("Method not implemented.");
    }
    deleteRow(objectId: string | number, force: boolean) {
        throw new Error("Method not implemented.");
    }
    deleteRows(filter: Filter, force: boolean) {
        throw new Error("Method not implemented.");
    }
}