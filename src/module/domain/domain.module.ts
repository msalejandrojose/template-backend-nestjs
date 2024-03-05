import { DynamicModule, Module } from "@nestjs/common";
import { PrismaService } from "src/core/infrastructure/database/prisma/PrismaService";
import { Model } from "src/core/domain/model/Model";
import { POKEMON_LIST_APPLICATION, POKEMON_REPOSITORY, PRISMA_REPOSITORY, PokemonListUseCaseProvider, PokemonRepository, prismaDbRepository } from "./DomainFactory";

@Module({})
export class DomainModule {
    static register(): DynamicModule {
        return {
            module: DomainModule,
            imports: [
            ],
            providers: [
                Model,
                PrismaService,
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