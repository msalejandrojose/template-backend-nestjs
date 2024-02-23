import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { BaseModel } from "./BaseModel";
import { IRepository } from "../port/outbound/IRepository";

@Injectable()
export class DynamicModel<T> extends BaseModel<T>{
    protected primaryKey: string;
    protected alias: string;
    protected data: Object[];
    protected repository: IRepository;

    constructor(primaryKey?:string,alias?:string){
        super();
        this.primaryKey=primaryKey;
        this.alias=alias;
        this.data = this.addData();
    }

    addData():Object[]{
        throw new HttpException('Method not implemented',HttpStatus.NOT_IMPLEMENTED);
    }

    static getOne() {
        const model = new this();

        return {id:1,name:'static'};
    }

}