import { Product } from "src/core/domain/entities/Product";
import { ProductRepository } from "src/core/domain/ports/outbound/ProductRepository";
export declare class ProductRepositoryAdapter implements ProductRepository {
    save(product: Product): Promise<Product>;
    findOne(id: number): Promise<false | Product>;
}
