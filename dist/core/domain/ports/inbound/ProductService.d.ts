import { ProductCreateDTO } from "src/core/shared/ProductCreateDTO";
import { Product } from "../../entities/Product";
export interface ProductService {
    save(productCreateDTO: ProductCreateDTO): Promise<Product>;
    validateData(productCreateDTO: ProductCreateDTO): boolean;
}
