import { ProductApplication } from "../../../core/application/ProductApplication";
export declare class ProductController {
    private application;
    constructor(application: ProductApplication);
    createProduct(): Promise<import("../../../core/domain/entities/Product").Product>;
}
