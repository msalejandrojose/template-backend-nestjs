import { DynamicModule, Module } from "@nestjs/common";

@Module({})
export class ApplicationModule{
    static register(): DynamicModule {
        return {
            module: ApplicationModule,
            imports: [],
            providers: [
            ],
            controllers: [
            ],
        };
    }
}