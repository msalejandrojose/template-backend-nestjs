import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prisma/PrismaService';
import { Model } from '../domain/model/Model';

@Injectable()
export class SuperheroService {
  protected prismaService: PrismaService;
  constructor(){
    this.prismaService = new PrismaService();
  }
  
  calculatePowerLevel(strength: number, speed: number): number {
    let i = 0;
    return strength * speed * Math.random();
  }
}