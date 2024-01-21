"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepositoryAdapter = void 0;
const Product_1 = require("../../core/domain/entities/Product");
class ProductRepositoryAdapter {
    save(product) {
        return Promise.resolve(Product_1.Product.create("HOLA", 10));
    }
    findOne(id) {
        return Promise.resolve(Product_1.Product.create("HOLA", 10));
    }
}
exports.ProductRepositoryAdapter = ProductRepositoryAdapter;
//# sourceMappingURL=ProductRepositoryAdapter.js.map