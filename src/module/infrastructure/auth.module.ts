import {forwardRef,Module} from '@nestjs/common';
// import {AuthService} from "../../core/application/auth/auth.service";
// import {AuthController} from "../../core/infrastructure/controller/auth.controller";
import {DomainModule} from "../domain/domain.module";
import {JwtModule,JwtService} from "@nestjs/jwt";
// import {AuthGuard} from "../../core/infrastructure/guard/auth.guard";
import {APP_GUARD} from "@nestjs/core";
import {getEnv} from "../../launcher/config/environment";
import {UserModule} from "./user.module";
import {AuthService} from "../../application/auth/auth.service";
import {AuthController} from "../../infrastructure/controller/auth/auth.controller";
import {AuthInterceptor} from "../../infrastructure/interceptor/auth.interceptor";

const { keys } = getEnv()

@Module({
    imports: [
        forwardRef(() => UserModule),
        JwtModule.register({}),
    ],
    providers: [
        AuthService,
        AuthInterceptor,
        {
            provide: 'ACCESS_TOKEN_JWT_SERVICE',
            useFactory: () => {
                return new JwtService({
                    secret: keys.privateKey,
                    signOptions: { expiresIn: keys.accessTokenTime+'s' },
                });
            },
        },
        {
            provide: 'REFRESH_TOKEN_JWT_SERVICE',
            useFactory: () => {
                return new JwtService({
                    secret: keys.secondaryKey,
                    signOptions: { expiresIn: keys.refreshTokenTime+'d' },
                });
            },
        },
    ],
    controllers: [
        AuthController
    ],
    exports: [
        AuthService,
        AuthInterceptor,
        'ACCESS_TOKEN_JWT_SERVICE',
        'REFRESH_TOKEN_JWT_SERVICE',
    ]
})
export class AuthModule {}