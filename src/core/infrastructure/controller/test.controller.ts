import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { Field } from 'src/core/domain/database/Field';
import { Filter } from 'src/core/domain/database/Filter';
import { Pokemon } from 'src/core/domain/model/Pokemon';

@Controller('/test')
export class TestController {
    constructor() { }

    @Get()
    async getTotal() {

        const fields = new Field();
        fields.addField(['id','name']);

        const filter = new Filter();
        filter.addEqualValue('name','pikachu');

        const pokemon = await Pokemon.getRows(fields,filter);
        return pokemon;
    }

    @Get(':id')
    async getData(@Param('id') id: number) {
        const pokemon = await Pokemon.getOne(id);
        return pokemon;
    }
}
