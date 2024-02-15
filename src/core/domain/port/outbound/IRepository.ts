export interface IRepository{
    getOne(objectId:string | number): Promise<Object | false>;
    //getOneValue(objectId:string | number,columnName:string): Promise<T | false>;
    //getOneByFilter(filter:Object,columnNames:string[] | null): Promise<T | false>;
    //getOneValueByFilter(filter:Object,columnName:string): Promise<T | false>;
    //getRows(filter:Object,columnNames:string[] | null): Promise<T[] | []>
}