import { Body, Controller, Get, Inject, Post, UseFilters } from "@nestjs/common";
import { ProductApplication } from "../../../core/application/ProductApplication";
import { Log } from "../../shared/Log";


@Controller('/product')
export class ProductController {

    constructor(@Inject('PRODUCT_APPLICATION') private application: ProductApplication) {}

    @Get()
    async createProduct() {
        return this.application.createProduct({"name":"HOLA","price":13});
    }
}