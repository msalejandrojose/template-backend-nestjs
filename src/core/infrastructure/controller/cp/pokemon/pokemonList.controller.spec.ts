import { Test, TestingModule } from '@nestjs/testing';
import { PokemonListController } from './pokemonList.controller';

describe('PokemonListController', () => {
  let controller: PokemonListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonListController],
    }).compile();

    controller = module.get<PokemonListController>(PokemonListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
