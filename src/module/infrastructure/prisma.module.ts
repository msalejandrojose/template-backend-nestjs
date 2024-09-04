import { Module } from '@nestjs/common';
import {PrismaService} from "../../infrastructure/adapter/prisma/PrismaService";

@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule {}