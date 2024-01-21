import { ProductCreateDTO } from "src/core/shared/ProductCreateDTO";
import { ProductService } from "../ports/inbound/ProductService";
import { Product } from "../entities/Product";
import { ProductRepository } from "../ports/outbound/ProductRepository";
import { HttpException } from "@nestjs/common";

export class ProductDomainService implements ProductService{

    constructor(private productRespository:ProductRepository){}

    save(productCreateDTO: ProductCreateDTO): Promise<Product> {
        if(this.validateData(productCreateDTO)){
            return this.productRespository.save(Product.create(productCreateDTO.name,productCreateDTO.price));
        }else{
            throw new HttpException("Error en la validación del product",400);
        }
    }
    validateData(productCreateDTO: ProductCreateDTO): boolean {
        //TODO validate data
        return true;
    }
    
}