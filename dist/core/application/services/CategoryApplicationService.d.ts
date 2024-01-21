import { Product } from "src/core/domain/entities/Product";
import { ProductCreateDTO } from "src/core/shared/ProductCreateDTO";
import { ProductApplication } from "../ProductApplication";
import { ProductService } from "src/core/domain/ports/inbound/ProductService";
export declare class CategoryApplicationService implements ProductApplication {
    private productService;
    constructor(productService: ProductService);
    createProduct(productDTO: ProductCreateDTO): Promise<Product>;
}
