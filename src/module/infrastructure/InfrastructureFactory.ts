import { ClassProvider } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PokemonListUseCase } from "src/core/application/services/pokemon.list.use-case";
import { Pokemon } from "src/core/domain/model/Pokemon";
import { IRepository } from "src/core/domain/port/outbound/IRepository";
import { PrismaRepository } from "src/core/infrastructure/adapter/database/PrismaRepository";
import { PrismaService } from "src/core/infrastructure/database/prisma/PrismaService";