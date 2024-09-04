import { Query } from "../../infrastructure/adapter/prisma/dtos/Query"

export class InnerJoin {
    tableName: string;
    query: Query;

    constructor(tableName:string,query?:Query) {
        this.tableName=tableName;
        if(query){
            this.query = query;
        }
    }
}