import { Product } from "../../entities/Product";
export interface IModelRepository<T extends Product> {
    getOne($objectId: string): Promise<T | false>;
    getOneValue($objectId: string, $columnName: string): any;
}
