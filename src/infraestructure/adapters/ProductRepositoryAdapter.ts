import { Product } from "src/core/domain/entities/Product";
import { ProductRepository } from "src/core/domain/ports/outbound/ProductRepository";

export class ProductRepositoryAdapter implements ProductRepository{
    save(product: Product): Promise<Product> {
        return Promise.resolve(Product.create("HOLA",10));
    }
    findOne(id: number): Promise<false | Product> {
        return Promise.resolve(Product.create("HOLA",10));
    }
    
}