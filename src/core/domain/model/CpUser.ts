import { IRepository } from "../port/outbound/IRepository";
import { Model } from "./Model";

export class CpUser extends Model{
    constructor(repository:IRepository){
        super('cp_user','id','c');
    }
}

export interface CpUserDto{
    id: number,
    name: string,
    last_name: string,
    date: Date,
}