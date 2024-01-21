import { HttpException } from "@nestjs/common";
import { Product } from "../domain/entities/Product";
import { ProductCreateDTO } from "../shared/ProductCreateDTO";

export interface ProductApplication{
    createProduct(productDTO:ProductCreateDTO): Promise<Product>;
}