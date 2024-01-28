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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../database/prisma/PrismaService");
let ProductController = class ProductController {
    constructor(application, prismaDatabase) {
        this.application = application;
        this.prismaDatabase = prismaDatabase;
    }
    async createProduct() {
        console.log(await this.prismaDatabase.cpUser.findMany());
        return this.application.createProduct({ "name": "HOLA", "price": 13 });
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('/product'),
    __param(0, (0, common_1.Inject)('PRODUCT_APPLICATION')),
    __metadata("design:paramtypes", [Object, PrismaService_1.PrismaService])
], ProductController);
//# sourceMappingURL=ProductController.js.map