import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { PrismaService } from '../database/prisma/PrismaService';
import { CpUser, CpUserDto } from 'src/core/domain/model/CpUser';
import { StaticModel } from 'src/core/domain/model/StaticModel';
import { IRepository } from 'src/core/domain/port/outbound/IRepository';
import { SuperheroService } from '../superhero.service';
import { Role, RoleDto } from 'src/core/domain/model/Role';

@Controller('/test')
export class TestController {
    constructor() { }

    @Get()
     //@Param('id') id:any
    async getData() {
        
        const role123 = await Role.getOne<RoleDto>();
        //const user = await CpUser.getOne();

        console.log(typeof role123);

        return "ASD";
    }
}
