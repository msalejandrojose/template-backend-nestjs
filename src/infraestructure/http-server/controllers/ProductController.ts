import { Body, Controller, Get, Inject, Post, UseFilters } from "@nestjs/common";
import { ProductApplication } from "../../../core/application/ProductApplication";
import { Log } from "../../shared/Log";
import { PrismaService } from "src/infraestructure/database/prisma/PrismaService";
import { CpUser } from "src/core/domain/entities/CpUser";
import { ModelPrismaRepositoryAdapter } from "src/infraestructure/adapters/ModelPrismaRepositoryAdapter";


@Controller('/product')
export class ProductController {

    constructor(
        @Inject('PRODUCT_APPLICATION') private application: ProductApplication,
        private prismaDatabase: PrismaService,
        private repository: ModelPrismaRepositoryAdapter,
        private model:CpUser
    ) { }

    @Get()
    async createProduct() {
        console.log(await this.prismaDatabase[this.model.getModel()].findFirst());
        //console.log(this.repository.getOne(1));
        return this.application.createProduct({ "name": "HOLA", "price": 13 });
    }

    //console.log(await this.prismaDatabase.cpUser.findMany());
}