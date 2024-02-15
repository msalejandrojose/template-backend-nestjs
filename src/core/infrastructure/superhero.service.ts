import { Injectable } from '@nestjs/common';

@Injectable()
export class SuperheroService {
  calculatePowerLevel(strength: number, speed: number): number {
    let i = 0;
    return strength * speed * Math.random();
  }
}