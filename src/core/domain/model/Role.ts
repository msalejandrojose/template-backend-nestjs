import { Model } from "./Model";

export class Role<RoleDto> extends Model<RoleDto>{
    constructor(){
        super('role','id','e');
    }
}


export interface RoleDto{
    id: string,
    name: string,
}