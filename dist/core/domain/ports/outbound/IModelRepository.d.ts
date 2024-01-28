export interface IModelRepository {
    getOne(objectId: string | number): Promise<Object | false>;
    getOneValue(objectId: string | number, columnName: string): Promise<Object | false>;
    getOneByFilter(filter: Object, columnNames: string[] | null): Promise<Object | false>;
    getOneValueByFilter(filter: Object, columnName: string): Promise<Object | false>;
    getRows(filter: Object, columnNames: string[] | null): Promise<Object[] | []>;
}
