import { DynamicModule, Module } from "@nestjs/common";
import {ApplicationModule} from "../application/application.module";
import {UserModule} from "./user.module";
import {AuthModule} from "./auth.module";

@Module({})
export class InfrastructureModule {
    static register(): DynamicModule {
        return {
            module: InfrastructureModule,
            imports: [
                ApplicationModule.register(),
                UserModule
            ],
            providers: [],
            controllers: [],
            exports: [],
        };
    }
}