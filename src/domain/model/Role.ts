import { IRepository } from "../port/outbound/IRepository";
import { Model } from "./Model";

export class Role extends Model{
    constructor(service:IRepository){
        super(service,'role','id','e');
    }
}


export interface RoleDto{
    id: string,
    name: string,
}