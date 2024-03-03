import { Prisma } from "@prisma/client";
import { Field } from "src/core/domain/database/Field";
import { Condition, ConditionOperator, Filter } from "src/core/domain/database/Filter";
import { InnerJoin } from "src/core/domain/database/InnerJoin";
import { Limit } from "src/core/domain/database/Limit";
import { Order, OrderItem } from "src/core/domain/database/Order";

export class Query {
    select?: Object;
    where?: Object;
    take?: number;
    orderBy?: Object;
    include?: Object;

    constructor(fields?: Field, filter?: Filter, order?: Order, limit?: Limit, include?:InnerJoin[]) {
        if (fields) {
            this.select = this.toPrismaFields(fields);
        }
        if (filter) {
            this.where = this.toPrismaFilter(filter);
        }
        if(order){
            this.orderBy = this.toPrismaOrder(order.getOrder());
        }
        if (limit) {
            this.take = limit.getLimit();
        }
        if(include){
            this.include=this.toPrismaInnerJoin(include);
        }
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

    private toPrismaOrder(order: OrderItem[]): any {
        return order.map(({ field, order }) => ({ [field]: order }));
    }

    private toPrismaInnerJoin(include: InnerJoin[]){
        const includes = {};

        include.forEach((item) => {
            includes[item.tableName] = true;
            if(item.query){
                includes[item.tableName] = item.query;
            }
        });

        return includes;
    }
}