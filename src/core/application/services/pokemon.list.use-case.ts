import { IRepository } from "src/core/domain/port/outbound/IRepository";
import { ObjectListUseCase } from "../object.list.use-case";
import { Model } from "src/core/domain/model/Model";
import { Inject } from "@nestjs/common";
import { Pokemon } from "src/core/domain/model/Pokemon";

export class PokemonListUseCase implements ObjectListUseCase{
    pokemon:Model;
    constructor(@Inject('POKEMON_LIST_APPLICATION')pokemon: Model,repository:IRepository){
        this.pokemon=pokemon;
        //this.pokemon = new Pokemon(repository);
    }

    getList(){
        return this.pokemon.getOne(105);
    }
}