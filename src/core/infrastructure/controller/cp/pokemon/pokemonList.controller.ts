import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';

@Controller('/pokemon')
export class PokemonListController {
    constructor() { }

    @Get()
    get() {
        return "ASD";
    }
}
