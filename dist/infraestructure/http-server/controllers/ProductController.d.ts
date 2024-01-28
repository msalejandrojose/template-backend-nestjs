import { ProductApplication } from "../../../core/application/ProductApplication";
import { PrismaService } from "src/infraestructure/database/prisma/PrismaService";
export declare class ProductController {
    private application;
    private prismaDatabase;
    constructor(application: ProductApplication, prismaDatabase: PrismaService);
    createProduct(): Promise<import("../../../core/domain/entities/Product").Product>;
}
