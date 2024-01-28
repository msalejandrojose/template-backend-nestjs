import { ProductApplication } from "../../../core/application/ProductApplication";
import { PrismaService } from "src/infraestructure/database/prisma/PrismaService";
import { ModelPrismaRepositoryAdapter } from "src/infraestructure/adapters/ModelPrismaRepositoryAdapter";
export declare class ProductController {
    private application;
    private prismaDatabase;
    private repository;
    constructor(application: ProductApplication, prismaDatabase: PrismaService, repository: ModelPrismaRepositoryAdapter);
    createProduct(): Promise<import("../../../core/domain/entities/Product").Product>;
}
