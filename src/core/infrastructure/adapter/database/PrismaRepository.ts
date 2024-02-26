import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { Model } from "src/core/domain/model/Model";
import { IRepository } from "src/core/domain/port/outbound/IRepository";
import { PrismaService } from "../../database/prisma/PrismaService";
import { PrismaClient } from "@prisma/client";
import { BaseModel } from "src/core/domain/model/BaseModel";
import { CpUserDto } from "src/core/domain/model/CpUser";
import { InfrastructureModule } from "src/module/infrastructure/infrastructure.module";
import { Field } from "src/core/domain/database/Field";
import { Condition, ConditionOperator, Filter } from "src/core/domain/database/Filter";
import { Limit } from "src/core/domain/database/Limit";
import { Order } from "src/core/domain/database/Order";

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
        fields = this.toPrismaFields(fields);
        filter = this.toPrismaFilter(filter);
        //filter = this.toPrismaOrder(filter);
        //filter = this.toPrismaLimit(filter);
        return await this.getPrismaServiceTable().findMany({ select: fields, where: filter });
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

    private toPrismaFilter(prismaFilter: Filter): any {
        return {
            [prismaFilter.operator]: prismaFilter.conditions.map(conditionToWhere),
        };

        function conditionToWhere(condition: Condition): any {
            switch (condition.operator) {
                case ConditionOperator.EQUAL:
                    return { [condition.column]: { equals: condition.value } };
                case ConditionOperator.UNEQUAL:
                    return { [condition.column]: { not: { equals: condition.value } } };
                case ConditionOperator.IN:
                    return { [condition.column]: { in: condition.value } };
                case ConditionOperator.NOT_IN:
                    return { [condition.column]: { not: { in: condition.value } } };
                case ConditionOperator.IS:
                    return { [condition.column]: { equals: null } };
                case ConditionOperator.IS_NOT:
                    return { [condition.column]: { not: { equals: null } } };
                case ConditionOperator.LESS_THAN:
                    return { [condition.column]: { lt: condition.value } };
                case ConditionOperator.GREATER_THAN:
                    return { [condition.column]: { gt: condition.value } };
                case ConditionOperator.LESS_THAN_OR_EQUAL:
                    return { [condition.column]: { lte: condition.value } };
                case ConditionOperator.GREATER_THAN_OR_EQUAL:
                    return { [condition.column]: { gte: condition.value } };
                case ConditionOperator.LIKE:
                    return { [condition.column]: { contains: condition.value } };
                default:
                    throw new Error(`Operador no soportado: ${condition.operator}`);
            }

        }
    }

    private toPrismaFields(prismaField: Field): any {
        const fieldsObject: Record<string, true> = {};
      
        prismaField.getFields().forEach((field) => {
          fieldsObject[field] = true;
        });
      
        return fieldsObject;
      }
}