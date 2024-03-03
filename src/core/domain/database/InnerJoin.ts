import { Query } from "src/core/infrastructure/adapter/database/dtos/Query";

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