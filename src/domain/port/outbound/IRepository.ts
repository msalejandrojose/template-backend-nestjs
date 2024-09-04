import { Field } from "../../database/Field";
import { Filter } from "../../database/Filter";
import { Limit } from "../../database/Limit";
import { Order } from "../../database/Order";
import { Model } from "../../model/Model";

export interface IRepository {
    getOne(model:Model,objectId: string | number);
    getOneValue(model:Model,objectId: string | number, field: string, order?: Order);
    getOneByFilter(model:Model,filter: Filter, field?: string | number, order?: Order);
    getOneValueByFilter(model:Model,filter: Filter, field: string | number, order?: Order);
    getRows(model:Model,fields?: Field, filter?: Filter, order?: Order, limit?: Limit);
    getRowCount(model:Model,filter?: Filter):Promise<number>;
    insertRow(model:Model,data: Object);
    insertRows(model:Model,datas: Object[]);
    updateRow(model:Model,objectId: string | number, data: Object);
    updateRows(model:Model,filter: Filter, data: Object);
    deleteRow(model:Model,objectId: string | number, force: boolean);
    deleteRows(model:Model,filter: Filter, force: boolean);
}