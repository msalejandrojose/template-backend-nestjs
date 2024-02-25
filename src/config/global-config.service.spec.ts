import { Test, TestingModule } from '@nestjs/testing';
import { GlobalConfig } from './global-config.service';

describe('GlobalConfig', () => {
  let service: GlobalConfig;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalConfig],
    }).compile();

    service = module.get<GlobalConfig>(GlobalConfig);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
