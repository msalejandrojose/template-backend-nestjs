"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfraestructureModule = void 0;
const common_1 = require("@nestjs/common");
const ProductController_1 = require("./http-server/controllers/ProductController");
const CategoryApplicationService_1 = require("../core/application/services/CategoryApplicationService");
const PrismaService_1 = require("./database/prisma/PrismaService");
const productApplicationFactory = {
    provide: 'PRODUCT_APPLICATION',
    useFactory: (productService) => {
        return new CategoryApplicationService_1.CategoryApplicationService(productService);
    }
};
let InfraestructureModule = class InfraestructureModule {
};
exports.InfraestructureModule = InfraestructureModule;
exports.InfraestructureModule = InfraestructureModule = __decorate([
    (0, common_1.Module)({
        providers: [
            productApplicationFactory,
            PrismaService_1.PrismaService
        ],
        exports: [productApplicationFactory],
        controllers: [ProductController_1.ProductController]
    })
], InfraestructureModule);
//# sourceMappingURL=infraestructure.module.js.map