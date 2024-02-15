import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../database/prisma/PrismaService';

@Controller('/test')
export class TestController {
    constructor(private readonly prismaService: PrismaService) { }

    @Get()
    getData() {
        const cpUser = this.prismaService.cp_user.findFirst();
        return cpUser;
        return 'Hola Mundo';
    }
}
