import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { IRepository } from "../port/outbound/IRepository";

@Injectable()
export abstract class BaseModel<T>{
    protected repository: IRepository;
    static getOne(objectId: string | number): Object {
        throw new HttpException('Method not implemented', HttpStatus.NOT_IMPLEMENTED);
    }
}