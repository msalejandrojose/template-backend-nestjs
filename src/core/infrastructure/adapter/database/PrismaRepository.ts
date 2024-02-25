import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { Model } from "src/core/domain/model/Model";
import { IRepository } from "src/core/domain/port/outbound/IRepository";
import { PrismaService } from "../../database/prisma/PrismaService";
import { PrismaClient } from "@prisma/client";
import { BaseModel } from "src/core/domain/model/BaseModel";
import { CpUserDto } from "src/core/domain/model/CpUser";

//@Injectable()
export class PrismaRepository implements IRepository{
    protected prismaService: PrismaClient;
    //,@Inject(forwardRef(() => Model)) private model: Model
    constructor(private readonly model:Model<Object>){ //private readonly model:Model
        this.prismaService = new PrismaService()
    }

    async getOne(){
        console.log(this.model.getTableName());
        const asd = await this.prismaService[this.model.getTableName()].findMany();
        return asd;
    }

}