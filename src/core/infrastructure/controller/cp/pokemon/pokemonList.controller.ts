import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('PokemonList')
@Controller('/pokemon')
export class PokemonListController {
    constructor() { }
    // Método GET para obtener el listado de Pokémon con filtros y paginación
    @ApiOperation({ summary: 'Obtener el listado de Pokémon con filtros y paginación' })
    @ApiOkResponse({ description: 'Listado de Pokémon' })
    @Get()
    async getPokemonList(
        @Query('page', new ParseIntPipe({ optional: true })) page: number = 0,
    ) {
        return { 'format': typeof page, 'page': page };
        return "ASD";//this.pokemonService.getPokemonList({ name, page, limit });
    }

    // Método GET para obtener el listado de inputs del filtrado de Pokémon
    @ApiOperation({ summary: 'Obtener el listado de inputs del filtrado de Pokémon' })
    //@ApiOkResponse({ description: 'Listado de inputs para filtrado', type: PokemonFilterInputDto, isArray: true })
    @Get('/filter-inputs')
    async getPokemonFilterInputs() {
        return "ASD";//this.pokemonService.getPokemonFilterInputs();
    }

    // Método DELETE para eliminar una serie de Pokémon por sus IDs
    @ApiOperation({ summary: 'Eliminar una serie de Pokémon por sus IDs' })
    @ApiOkResponse({ description: 'Pokémon eliminados exitosamente' })
    @ApiBadRequestResponse({ description: 'Error al eliminar Pokémon' })
    @Delete()
    async deletePokemonSeries(@Body() deletePokemonDto: any) {
        return "DELETE";
        //const deletedPokemons = await this.pokemonService.deletePokemonSeries(deletePokemonDto);
        //return { message: 'Pokémon eliminados exitosamente', deletedPokemons };
    }
}
