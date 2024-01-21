"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    static create(name, price) {
        const product = new Product();
        product.id = 1;
        product.name = name;
        product.description = "Descripcion de prueba";
        product.unitPrice = price;
        product.unitsInStock = 0;
        product.unitsOnOrder = 0;
        return product;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map