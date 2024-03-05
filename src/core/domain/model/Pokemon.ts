import { Query } from "src/core/infrastructure/adapter/database/dtos/Query";
import { Model } from "./Model";
import { Field } from "../database/Field";
import { IRepository } from "../port/outbound/IRepository";
import { Inject } from "@nestjs/common";

export class Pokemon extends Model{
    constructor(@Inject('PRISMA_REPOSITORY')repository:IRepository){
        super('pokemon','id','p');
        this.initializeRepository(repository);
        const fields = new Field();
        fields.addField(['name']);
        //this.addInnerJoin('type',new Query(fields));
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