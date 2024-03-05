import { IRepository } from "../port/outbound/IRepository";
import { Model } from "./Model";

export class Role extends Model{
    constructor(repository:IRepository){
        super('role','id','e');
    }
}


export interface RoleDto{
    id: string,
    name: string,
}