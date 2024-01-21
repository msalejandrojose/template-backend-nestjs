"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductApplicationService = void 0;
const Product_1 = require("../../domain/entities/Product");
const common_1 = require("@nestjs/common");
let ProductApplicationService = class ProductApplicationService {
    constructor(productService) {
        this.productService = productService;
    }
    ;
    createProduct(productDTO) {
        const product = new Product_1.Product();
        product.id = 1;
        product.name = "Producto prueba";
        product.description = "Descripcion prueba";
        product.unitPrice = 10;
        product.unitsInStock = 0;
        product.unitsOnOrder = 0;
        return Promise.resolve(product);
    }
};
exports.ProductApplicationService = ProductApplicationService;
exports.ProductApplicationService = ProductApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], ProductApplicationService);
//# sourceMappingURL=ProductApplicationService%20copy.js.map