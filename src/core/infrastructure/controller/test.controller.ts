import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Field } from 'src/core/domain/database/Field';
import { Filter } from 'src/core/domain/database/Filter';
import { Limit } from 'src/core/domain/database/Limit';
import { Order, OrderDirection } from 'src/core/domain/database/Order';
import { Pokemon } from 'src/core/domain/model/Pokemon';

@ApiTags('pokemons')
@Controller('/test')
export class TestController {
    constructor() { }

    @Get()
    async getTotal() {

        const order = new Order();
        order.addOrder('name',OrderDirection.ASC);

        const fields = new Field();
        fields.addField(['id','name']);

        const filter = new Filter();
        filter.addEqualValue('name','pikachu');
        return filter;

        //const countPokemon = await Pokemon.getRowCount();
        //const numPage = 40;
        //const numItems = 20;
        //const pages = countPokemon/numItems;
        //return Pokemon.getRows(null,null,null,new Limit(numItems,numPage*numItems));

        //const pokemon = await Pokemon.getRows(fields,filter,null,new Limit(10));
        //const pokemon = Pokemon.getOne(1);
        //return pokemon;
        //const pokemon = Pokemon.getOneValue(1,'name');
        //return pokemon;
        //const pokemon = Pokemon.getOneByFilter(filter,'name');
        //return pokemon;
        //const pokemon = Pokemon.getOneValueByFilter(filter,'name');
        //return pokemon;
        //const pokemon = Pokemon.getRows();
        //return pokemon;
        //const pokemon = Pokemon.getRowCount();
        //return pokemon;
        //const pokemon = await Pokemon.getRows(null,null,order,new Limit(10));
        //return pokemon;
    }

    @Get(':id')
    async getData(@Param('id') id: number) {
        const pokemon = await Pokemon.getOne(id);
        return pokemon;
    }
}
