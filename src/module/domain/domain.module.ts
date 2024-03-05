import { ClassProvider, DynamicModule, Module } from "@nestjs/common";
import { PrismaService } from "src/core/infrastructure/database/prisma/PrismaService";
import { Service } from "src/core/domain/model/Service";
import { PrismaRepository } from "src/core/infrastructure/adapter/database/PrismaRepository";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { Model } from "src/core/domain/model/Model";
import { IRepository } from "src/core/domain/port/outbound/IRepository";
import { Pokemon } from "src/core/domain/model/Pokemon";
import { PokemonListUseCase } from "src/core/application/services/pokemon.list.use-case";

export const PRISMA_REPOSITORY = 'PRISMA_REPOSITORY';

export const POKEMON_REPOSITORY = 'POKEMON_REPOSITORY';

export const POKEMON_LIST_APPLICATION = 'POKEMON_LIST_APPLICATION';

export const prismaDbRepository = {
    provide: PRISMA_REPOSITORY,
    useFactory() {
        return new PrismaRepository(new PrismaService())
    },
}

export const PokemonRepository = {
    provide: POKEMON_REPOSITORY,
    useFactory(prismaRepository: IRepository) {
        return new Pokemon(prismaRepository)
    },
    inject: [
        PRISMA_REPOSITORY,
    ]
}

export const PokemonListUseCaseProvider = {
    provide: POKEMON_LIST_APPLICATION,
    useFactory(model: Pokemon,repository:IRepository) {
        return new PokemonListUseCase(model,repository)
    },
    inject: [
        POKEMON_REPOSITORY,
        PRISMA_REPOSITORY
    ]
}

@Module({})
export class DomainModule {
    static register(): DynamicModule {
        return {
            module: DomainModule,
            imports: [
            ],
            providers: [
                PrismaService,
                prismaDbRepository,
                Model,
                prismaDbRepository,
                PokemonRepository,
                PokemonListUseCaseProvider
            ],
            controllers: [],
            exports: [
                PRISMA_REPOSITORY,
                POKEMON_REPOSITORY,
                POKEMON_LIST_APPLICATION,
            ]
        };
    }
}