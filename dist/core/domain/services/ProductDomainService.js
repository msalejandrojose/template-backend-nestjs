"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDomainService = void 0;
const Product_1 = require("../entities/Product");
const common_1 = require("@nestjs/common");
class ProductDomainService {
    constructor(productRespository) {
        this.productRespository = productRespository;
    }
    save(productCreateDTO) {
        if (this.validateData(productCreateDTO)) {
            return this.productRespository.save(Product_1.Product.create(productCreateDTO.name, productCreateDTO.price));
        }
        else {
            throw new common_1.HttpException("Error en la validación del product", 400);
        }
    }
    validateData(productCreateDTO) {
        return true;
    }
}
exports.ProductDomainService = ProductDomainService;
//# sourceMappingURL=ProductDomainService.js.map