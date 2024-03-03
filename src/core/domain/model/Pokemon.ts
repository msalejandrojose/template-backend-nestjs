import { Query } from "src/core/infrastructure/adapter/database/dtos/Query";
import { Model } from "./Model";
import { Field } from "../database/Field";
import { InnerJoin } from "../database/InnerJoin";

export class Pokemon extends Model<Pokemon>{
    constructor(){
        super('pokemon','id','p');
        const fields = new Field();
        fields.addField(['name']);
        this.addInnerJoin('type',new Query(fields));
    }
}

export interface PokemonDto{
    id: number,
    name: string,
    height: number,
    weight: number,
    base_experience: number;
    pokemon_type_id: number;
}