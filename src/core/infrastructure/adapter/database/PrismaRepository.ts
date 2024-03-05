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

@Injectable()
export class PrismaRepository implements IRepository {
    protected prismaService: PrismaClient;
    protected model: Model;
    constructor(prismaService:PrismaService) { 
        this.prismaService=prismaService;
        //this.prismaService = new PrismaService()
    }

    addModel(model:Model){
        //return "ADD MODEL";
        this.model=model;
    }

    private getPrismaServiceTable() {
        return this.prismaService[this.model.getTableName()]
    }

    async getOne(objectId: string) {
        return await this.getPrismaServiceTable().findUnique({ where: { [this.model.getPrimaryKey()]: objectId } });
    }

    async getOneValue(objectId: string | number, field: string, order?: Order) {
        const filter = new Filter();
        filter.addEqualValue(this.model.getPrimaryKey(), objectId);
        const fieldQuery = new Field();
        fieldQuery.addField(field);
        return await this.getPrismaServiceTable().findFirst(new Query(fieldQuery, filter, order, new Limit(1)));
    }

    async getOneByFilter(filter: Filter, field?: string | number, order?: Order) {
        const queryField = new Field();
        queryField.addField(field);
        return await this.getPrismaServiceTable().findFirst(new Query(queryField, filter, order, new Limit(1)));
    }
    async getOneValueByFilter(filter: Filter, field: string | number, order?: Order) {
        const queryField = new Field();
        queryField.addField(field);
        return await this.getPrismaServiceTable().findFirst(new Query(queryField, filter, order, new Limit(1)));
    }
    async getRows(fields?: Field, filter?: Filter, order?: Order, limit?: Limit) {
        return await this.getPrismaServiceTable().findMany(new Query(fields, filter, order, limit, this.model.getInnerJoins()));
    }
    async getRowCount(filter?: Filter): Promise<number> {
        return await this.getPrismaServiceTable().count(new Query(null, filter));
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