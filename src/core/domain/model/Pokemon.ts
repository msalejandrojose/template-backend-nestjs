import { Model } from "./Model";

export class Pokemon extends Model<Pokemon>{
    constructor(){
        super('pokemon','id','p');
    }
}

export interface Pokemon{
    id: number,
    name: string,
    height: number,
    weight: number,
    base_experience: number;
    pokemon_type_id: number;
}