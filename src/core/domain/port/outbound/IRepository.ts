import { BaseModel } from "../../model/BaseModel";

export interface IRepository{
    getOne();
    //getOne(table_name:string,objectId:string | number);
    //getOneValue(objectId:string | number,columnName:string): Promise<T | false>;
    //getOneByFilter(filter:Object,columnNames:string[] | null): Promise<T | false>;
    //getOneValueByFilter(filter:Object,columnName:string): Promise<T | false>;
    //getRows(filter:Object,columnNames:string[] | null): Promise<T[] | []>
}