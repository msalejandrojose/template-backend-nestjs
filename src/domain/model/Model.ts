import { BaseModel } from './BaseModel';
import { Field } from '../database/Field';
import { Filter } from '../database/Filter';
import { Order } from '../database/Order';
import { Limit } from '../database/Limit';
import { InnerJoin } from '../database/InnerJoin';
import { IRepository } from '../port/outbound/IRepository';
import { Query } from '../../infrastructure/adapter/prisma/dtos/Query';

export class Model extends BaseModel {
  protected tableName: string;
  protected primaryKey: string;
  protected alias: string;
  protected innerJoins: InnerJoin[];
  protected service: IRepository;

  constructor(service:IRepository,tableName: string, primaryKey: string, alias: string) {
    super();
    this.service = service;
    this.tableName = tableName;
    this.primaryKey = primaryKey;
    this.alias = alias;
    this.innerJoins = [];
  }

  getTableName(): string {
    return this.tableName;
  }

  getPrimaryKey(): string {
    return this.primaryKey;
  }

  getAlias(): string {
    return this.alias;
  }

  addInnerJoin(tableName: string, query?: Query) {
    this.innerJoins.push(new InnerJoin(tableName, query));
  }

  getInnerJoins(): InnerJoin[] {
    return this.innerJoins;
  }

  async getOne(objectId: string | number) {
    // if(typeof objectId == 'string'){
    //     objectId = parseInt(objectId);
    // }
    return (await this.service.getOne(this,objectId)) ?? false;
  }

  async getOneValue(objectId: string | number, field: string, order?: Order) {
    return await this.service.getOneValue(this,objectId, field, order);
  }

  async getOneByFilter(filter: Filter, field?: string | number, order?: Order) {
    return await this.service.getOneByFilter(this,filter, field, order);
  }

  async getOneValueByFilter(
    filter: Filter,
    field: string | number,
    order?: Order,
  ) {
    return await this.service.getOneValueByFilter(this,filter, field, order);
  }

  async getRows(fields?: Field, filter?: Filter, order?: Order, limit?: Limit) {
    return (
      (await this.service.getRows(this,fields, filter, order, limit)) ?? false
    );
  }

  async getRowCount(filter?: Filter): Promise<number> {
    return this.service.getRowCount(this,filter).then((count: number) => {
      return count;
    });
  }

  async insertRow(data: any) {
    return await this.service.insertRow(this,data);
  }
}