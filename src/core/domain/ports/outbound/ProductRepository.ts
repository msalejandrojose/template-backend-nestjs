import { Product } from "../../entities/Product";

export interface ProductRepository {
    save(product:Product): Promise<Product>;
    findOne(id:number): Promise<Product | false>
}