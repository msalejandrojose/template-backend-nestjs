import { DynamicModule, Module } from "@nestjs/common";

@Module({})
export class DomainModule {
    static register(): DynamicModule {
        return {
            module: DomainModule,
            imports: [],
            providers: [],
            controllers: [],
        };
    }
}