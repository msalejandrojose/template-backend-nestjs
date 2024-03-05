import { DynamicModule, Module } from "@nestjs/common";
import { TestController } from "src/core/infrastructure/controller/test.controller";
import { DomainModule } from "../domain/domain.module";
import { PrismaService } from "src/core/infrastructure/database/prisma/PrismaService";
import { PrismaRepository } from "src/core/infrastructure/adapter/database/PrismaRepository";
import { Model } from "src/core/domain/model/Model";
import { PokemonListController } from "src/core/infrastructure/controller/cp/pokemon/pokemonList.controller";

@Module({})
export class InfrastructureModule {
    private prismaService: PrismaService;
    static register(): DynamicModule {
        return {
            module: InfrastructureModule,
            imports: [
                DomainModule.register()
            ],
            providers: [
                PrismaService,
                //prismaDbRepository,
                PrismaRepository,
                Model,
                //PokemonRepository,
                //PokemonListUseCaseProvider
            ],
            controllers: [
                TestController,
                PokemonListController
            ],
            exports: [
                PrismaRepository,
                //PRISMA_REPOSITORY,
                //POKEMON_LIST_APPLICATION,
                //POKEMON_REPOSITORY
            ],
        };
    }
}