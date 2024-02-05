import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroService } from './superhero.service';

describe('SuperheroService', () => {
    let service: SuperheroService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SuperheroService],
        }).compile();

        service = module.get<SuperheroService>(SuperheroService);
    });

    it('should calculate the power level of superheroes', () => {
        const strength = 5;
        const speed = 10;
        const powerLevel = service.calculatePowerLevel(strength, speed);

        expect(powerLevel).toBeLessThanOrEqual(strength * speed);
        expect(powerLevel).toBeLessThanOrEqual(strength * speed * 10);
    });
});

describe('SuperheroService', () => {
    let service: SuperheroService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SuperheroService],
        }).compile();

        service = module.get<SuperheroService>(SuperheroService);
    });

    it('should calculate the power level of superheroes 2', () => {
        const strength = 5;
        const speed = 10;
        const powerLevel = service.calculatePowerLevel(strength, speed);

        expect(powerLevel).toBeLessThanOrEqual(strength * speed);
        expect(powerLevel).toBeLessThanOrEqual(strength * speed * 10);
    });
});