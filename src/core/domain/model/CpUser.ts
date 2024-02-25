import { Model } from "./Model";

export class CpUser extends Model<CpUserDto>{
    constructor(){
        super('cp_user','id','c');
    }
}

export interface CpUserDto{
    id: number,
    name: string,
    last_name: string,
    date: Date,
}