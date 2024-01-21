import { ProductCreateDTO } from "src/core/shared/ProductCreateDTO";
import { ProductService } from "../ports/inbound/ProductService";
import { Product } from "../entities/Product";
import { ProductRepository } from "../ports/outbound/ProductRepository";
export declare class ProductDomainService implements ProductService {
    private productRespository;
    constructor(productRespository: ProductRepository);
    save(productCreateDTO: ProductCreateDTO): Promise<Product>;
    validateData(productCreateDTO: ProductCreateDTO): boolean;
}
