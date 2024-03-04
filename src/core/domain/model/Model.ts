import { PrismaRepository } from "src/core/infrastructure/adapter/database/PrismaRepository";
import { BaseModel } from "./BaseModel";
import { CpUserDto } from "./CpUser";
import { Field } from "../database/Field";
import { Filter } from "../database/Filter";
import { Order } from "../database/Order";
import { Limit } from "../database/Limit";
import { Query } from "src/core/infrastructure/adapter/database/dtos/Query";
import { InnerJoin } from "../database/InnerJoin";

export class Model<T> extends BaseModel<T>{
    protected tableName: string;
    protected primaryKey: string;
    protected alias: string;
    protected innerJoins:InnerJoin[];

    constructor(tableName?:string,primaryKey?:string,alias?:string){
        super();
        this.tableName=tableName;
        this.primaryKey=primaryKey;
        this.alias=alias;
        this.repository = new PrismaRepository(this);
        this.innerJoins = [];
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

    addInnerJoin(tableName:string,query?: Query){
        this.innerJoins.push(new InnerJoin(tableName,query));
    }

    getInnerJoins(): InnerJoin[]{
        return this.innerJoins;
    }

    static async getOne<T>(objectId:string | number):Promise<T>{
        if(typeof objectId == 'string'){
            objectId = parseInt(objectId);
        }
        return await new this().repository.getOne(objectId)??false;
    }
    static async getOneValue(objectId: string | number, field: string, order?: Order){
        return await new this().repository.getOneValue(objectId,field,order);
    }
    static async getOneByFilter(filter: Filter, field?: string | number, order?: Order){
        return await new this().repository.getOneByFilter(filter,field,order);
    }
    static async getOneValueByFilter(filter: Filter, field: string | number, order?: Order){
        return await new this().repository.getOneValueByFilter(filter,field,order);
    }
    static async getRows(fields?: Field, filter?: Filter, order?: Order, limit?: Limit){
        return await new this().repository.getRows(fields,filter,order,limit)??false;
    }
    static async getRowCount(filter?: Filter):Promise<number>{
        return new this().repository.getRowCount(filter).then((count:number)=>{return count});
    }
}