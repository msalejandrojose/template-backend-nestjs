import { Field } from "../../database/Field";
import { Filter } from "../../database/Filter";
import { Limit } from "../../database/Limit";
import { Order } from "../../database/Order";

export interface IRepository {
    getOne(objectId: string | number, order?: Order);
    getOneValue(objectId: string | number, field: string, order?: Order);
    getOneByFilter(filter: Filter, field?: string | number, order?: Order);
    getOneValueByFilter(filter: Filter, field: string | number, order?: Order);
    getRows(fields?: Field, filter?: Filter, order?: Order, limit?: Limit);
    getRowCount(filter?: Filter);
    insertRow(data: Object);
    insertRows(datas: Object);
    updateRow(objectId: string | number, data: Object);
    updateRows(filter: Filter, data: Object);
    deleteRow(objectId: string | number, force: boolean);
    deleteRows(filter: Filter, force: boolean);
}