import { Product } from "src/core/domain/entities/Product";
import { ProductCreateDTO } from "src/core/shared/ProductCreateDTO";
import { ProductApplication } from "../ProductApplication";
import { ProductService } from "src/core/domain/ports/inbound/ProductService";
import { HttpException, Injectable } from "@nestjs/common";

@Injectable()
export class CategoryApplicationService implements ProductApplication{

    constructor(private productService:ProductService){};
    
    createProduct(productDTO: ProductCreateDTO): Promise<Product> {
        const product = new Product();
        product.id = 1;
        product.name= "Categoria prueba";
        product.description= "Categoria prueba";
        product.unitPrice= 10;
        product.unitsInStock= 0;
        product.unitsOnOrder= 0;
        return Promise.resolve(product);
    }
}