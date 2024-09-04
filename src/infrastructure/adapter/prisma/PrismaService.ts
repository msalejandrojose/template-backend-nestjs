import { Injectable, OnModuleInit } from "@nestjs/common";
import {PrismaClient} from "@prisma/client";
import {Model} from "../../../domain/model/Model";
import {Order} from "../../../domain/database/Order";
import {Filter} from "../../../domain/database/Filter";
import {Field} from "../../../domain/database/Field";
import {Query} from "./dtos/Query";
import {Limit} from "../../../domain/database/Limit";
import {IRepository} from "../../../domain/port/outbound/IRepository";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, IRepository{

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

    async getOne(model:Model,objectId: string | number) {
        return await this[model.getTableName()].findUnique({ where: { [model.getPrimaryKey()]: objectId } }) ?? undefined;
    }

    async getOneValue(model:Model,objectId: string | number, field: string, order?: Order) {
        const filter = new Filter();
        filter.addEqualValue(model.getPrimaryKey(), objectId);
        const fieldQuery = new Field();
        fieldQuery.addField(field);
        return await this[model.getTableName()].findFirst(new Query(fieldQuery, filter, order, new Limit(1)));
    }

    async getOneByFilter(model:Model,filter: Filter, field?: string | number, order?: Order) {
        let queryField = null;
        if(field){
            queryField = new Field();
            queryField.addField(field);
        }
        return await this[model.getTableName()].findFirst(new Query(queryField, filter, order, new Limit(1)));
    }
    async getOneValueByFilter(model:Model,filter: Filter, field: string | number, order?: Order) {
        const queryField = new Field();
        queryField.addField(field);
        return await this[model.getTableName()].findFirst(new Query(queryField, filter, order, new Limit(1)));
    }
    async getRows(model:Model,fields?: Field, filter?: Filter, order?: Order, limit?: Limit) {
        return await this[model.getTableName()].findMany(new Query(fields, filter, order, limit, model.getInnerJoins()));
    }
    async getRowCount(model:Model,filter?: Filter): Promise<number> {
        return await this[model.getTableName()].count(new Query(null, filter));
    }
    async insertRow(model:Model,data: Object) {
        return await this[model.getTableName()].create({ data: JSON.parse(JSON.stringify(data)) });
    }
    insertRows(model:Model,datas: Object[]) {
        return datas.map((item) => this.insertRow(model,item));
    }
    updateRow(model:Model,objectId: string | number, data: Object) {
        throw new Error("Method not implemented.");
    }
    updateRows(model:Model,filter: Filter, data: Object) {
        throw new Error("Method not implemented.");
    }
    deleteRow(model:Model,objectId: string | number, force: boolean) {
        throw new Error("Method not implemented.");
    }
    deleteRows(model:Model,filter: Filter, force: boolean) {
        throw new Error("Method not implemented.");
    }

}