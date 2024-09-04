import { DynamicModule, Module } from "@nestjs/common";
import {DomainModule} from "../domain/domain.module";

@Module({})
export class ApplicationModule{
    static register(): DynamicModule {
        return {
            module: ApplicationModule,
            imports: [
                DomainModule.register(),
            ],
            providers: [],
            exports: [],
        };
    }
}