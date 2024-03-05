import { ClassProvider } from "@nestjs/common";
import { PokemonListUseCase } from "src/core/application/services/pokemon.list.use-case";
import { Pokemon } from "src/core/domain/model/Pokemon";
import { IRepository } from "src/core/domain/port/outbound/IRepository";
import { PrismaRepository } from "src/core/infrastructure/adapter/database/PrismaRepository";
import { PrismaService } from "src/core/infrastructure/database/prisma/PrismaService";

export const PRISMA_REPOSITORY = 'PRISMA_REPOSITORY';

export const POKEMON_REPOSITORY = 'POKEMON_REPOSITORY';

export const POKEMON_LIST_APPLICATION = 'POKEMON_LIST_APPLICATION';

export const prismaDbRepository: ClassProvider<IRepository> = {
    provide: PRISMA_REPOSITORY,
    useClass: PrismaRepository,
}

export const PokemonRepository = {
    provide: POKEMON_REPOSITORY,
    useFactory(prismaRepository: IRepository) {
        return new Pokemon(new PrismaRepository(new PrismaService()))
    },
    inject: [
        PRISMA_REPOSITORY,
    ]
}

//export const PokemonListUseCaseProvider = {
//    provide: POKEMON_LIST_APPLICATION,
//    useFactory(model: Pokemon) {
//        return new PokemonListUseCase(model)
//        //return new PokemonListUseCase(new Pokemon(new PrismaRepository()))
//    },
//    inject: [
//        POKEMON_REPOSITORY,
//    ]
//}