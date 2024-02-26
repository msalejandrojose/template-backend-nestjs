import { PrismaRepository } from "src/core/infrastructure/adapter/database/PrismaRepository";
import { BaseModel } from "./BaseModel";
import { CpUserDto } from "./CpUser";
import { Field } from "../database/Field";
import { Filter } from "../database/Filter";
import { Order } from "../database/Order";
import { Limit } from "../database/Limit";

export class Model<T> extends BaseModel<T>{
    protected tableName: string;
    protected primaryKey: string;
    protected alias: string;

    constructor(tableName?:string,primaryKey?:string,alias?:string){
        super();
        this.tableName=tableName;
        this.primaryKey=primaryKey;
        this.alias=alias;
        this.repository = new PrismaRepository(this);
    }

    getTableName():string{
        return this.tableName;
    }

    getPrimaryKey():string{
        return this.primaryKey;
    }

    getAlias():string{
        return this.alias;
    }

    static async getOne<T>(objectId:string | number):Promise<T>{
        if(typeof objectId == 'string'){
            objectId = parseInt(objectId);
        }
        return await new this().repository.getOne(objectId)??false;
    }

    static async getRows(fields?: Field, filter?: Filter, order?: Order, limit?: Limit){
        return await new this().repository.getRows(fields,filter,order,limit)??false;
    }
}