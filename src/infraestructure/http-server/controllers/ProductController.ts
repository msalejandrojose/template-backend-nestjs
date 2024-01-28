import { Body, Controller, Get, Inject, Post, UseFilters } from "@nestjs/common";
import { ProductApplication } from "../../../core/application/ProductApplication";
import { Log } from "../../shared/Log";
import { PrismaService } from "src/infraestructure/database/prisma/PrismaService";


@Controller('/product')
export class ProductController {

    constructor(@Inject('PRODUCT_APPLICATION') private application: ProductApplication, private prismaDatabase: PrismaService) {}

    @Get()
    async createProduct() {
        console.log(await this.prismaDatabase.cpUser.findMany());
        return this.application.createProduct({"name":"HOLA","price":13});
    }
}