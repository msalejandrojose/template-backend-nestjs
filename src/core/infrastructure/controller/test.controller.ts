import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { PrismaService } from '../database/prisma/PrismaService';
import { CpUser, CpUserDto } from 'src/core/domain/model/CpUser';
import { StaticModel } from 'src/core/domain/model/StaticModel';
import { IRepository } from 'src/core/domain/port/outbound/IRepository';
import { SuperheroService } from '../superhero.service';
import { Role, RoleDto } from 'src/core/domain/model/Role';
import { Filter } from 'src/core/domain/database/Filter';

@Controller('/test')
export class TestController {
    constructor() { }

    @Get()
     //@Param('id') id:any
    async getData() {

        const filter = new Filter();
        filter.addEqualValue('column',12);
        console.log(filter);
        
        const role123 = await Role.getOne<RoleDto>();
        const user = await CpUser.getOne();

        console.log(role123.id);

        return user;
    }
}
