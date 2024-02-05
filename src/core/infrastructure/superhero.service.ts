import { Injectable } from '@nestjs/common';

@Injectable()
export class SuperheroService {
  calculatePowerLevel(strength: number, speed: number): number {
    return strength * speed * Math.random();
  }
}