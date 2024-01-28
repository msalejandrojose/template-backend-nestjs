import { Module } from '@nestjs/common';
import { ProductApplicationService } from 'src/core/application/services/ProductApplicationService';
import { ProductRepository } from 'src/core/domain/ports/outbound/ProductRepository';
import { ProductDomainService } from 'src/core/domain/services/ProductDomainService';
import { ProductService } from 'src/core/domain/ports/inbound/ProductService';
import { ProductController } from './http-server/controllers/ProductController';
import { CategoryApplicationService } from 'src/core/application/services/CategoryApplicationService';
import { PrismaService } from './database/prisma/PrismaService';

const productApplicationFactory = {
    provide: 'PRODUCT_APPLICATION',
    useFactory: (productService: ProductService) => {
        return new CategoryApplicationService(productService);
    }
  };

@Module({
    providers:[
        productApplicationFactory,
        PrismaService
    ],
    exports:[productApplicationFactory],
    controllers:[ProductController]
})
export class InfraestructureModule {}
