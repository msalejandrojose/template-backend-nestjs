import { PrismaRepository } from "src/core/infrastructure/adapter/database/PrismaRepository";
import { BaseModel } from "./BaseModel";
import { Field } from "../database/Field";
import { Filter } from "../database/Filter";
import { Order } from "../database/Order";
import { Limit } from "../database/Limit";
import { Query } from "src/core/infrastructure/adapter/database/dtos/Query";
import { InnerJoin } from "../database/InnerJoin";
import { IRepository } from "../port/outbound/IRepository";

export class Model extends BaseModel{
    protected tableName: string;
    protected primaryKey: string;
    protected alias: string;
    protected innerJoins:InnerJoin[];
    protected repository: IRepository;

    constructor(tableName:string,primaryKey:string,alias:string){
        super();
        this.tableName=tableName;
        this.primaryKey=primaryKey;
        this.alias=alias;
        this.innerJoins = [];
    }

    protected initializeRepository(repository: IRepository) {
        this.repository = repository;
        this.repository.addModel(this);
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

    async getOne(objectId:string | number){
        if(typeof objectId == 'string'){
            objectId = parseInt(objectId);
        }
        return await this.repository.getOne(objectId)??false;
    }
    async getOneValue(objectId: string | number, field: string, order?: Order){
        return await this.repository.getOneValue(objectId,field,order);
    }
    async getOneByFilter(filter: Filter, field?: string | number, order?: Order){
        return await this.repository.getOneByFilter(filter,field,order);
    }
     async getOneValueByFilter(filter: Filter, field: string | number, order?: Order){
        return await this.repository.getOneValueByFilter(filter,field,order);
    }
     async getRows(fields?: Field, filter?: Filter, order?: Order, limit?: Limit){
        return await this.repository.getRows(fields,filter,order,limit)??false;
    }
     async getRowCount(filter?: Filter):Promise<number>{
        return this.repository.getRowCount(filter).then((count:number)=>{return count});
    }
}