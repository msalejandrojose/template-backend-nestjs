import { PrismaRepository } from "src/core/infrastructure/adapter/database/PrismaRepository";
import { BaseModel } from "./BaseModel";
import { CpUserDto } from "./CpUser";

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

    static async getOne<T>():Promise<T>{
        return await new this().repository.getOne() as T;
    }
}