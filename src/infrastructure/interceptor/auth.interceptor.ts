import {Injectable,NestInterceptor,ExecutionContext,CallHandler,UnauthorizedException,Inject} from '@nestjs/common';
import {catchError,Observable,throwError} from 'rxjs';
import { tap } from 'rxjs/operators';
import {JwtService} from "@nestjs/jwt";
import {Reflector} from "@nestjs/core";
import { Request } from 'express';
import {IS_PRIVATE_KEY} from "../decorator/auth.decorators";
import {getEnv} from "../../launcher/config/environment";
import {SignInDto} from "../../application/auth/dto/SignInDto";
import {AuthService} from "../../application/auth/auth.service";

const { keys,cookies } = getEnv();

@Injectable()
export class AuthInterceptor implements NestInterceptor {
    constructor(
        @Inject('ACCESS_TOKEN_JWT_SERVICE') private readonly accessTokenJwtService: JwtService,
        @Inject('REFRESH_TOKEN_JWT_SERVICE') private readonly refreshTokenJwtService: JwtService,
        private reflector: Reflector,
        private authService: AuthService,
    ) {}

    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        const isPrivate = this.reflector.getAllAndOverride<boolean>(IS_PRIVATE_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPrivate) {
            const request = context.switchToHttp().getRequest();
            const response = context.switchToHttp().getResponse();
            const token = this.extractTokenFromHeader(request);
            const authToken = new SignInDto(token,request.cookies[cookies.refreshTokenName] ?? undefined);
            let newAuthToken = undefined;
            try{
                newAuthToken = await this.authService.refreshToken(authToken);
            }catch(e){
                throw new UnauthorizedException();
            }

            return next.handle().pipe(
                tap(() => {
                    if(newAuthToken.access_token){
                        response.setHeader('x-access-token', newAuthToken.access_token);
                    }
                    if(newAuthToken.refresh_token){
                        response.cookie('refresh_token', newAuthToken.refresh_token, {
                            httpOnly: true,
                            secure: false, // Solo en producción
                            maxAge: keys.refreshTokenTime * 24 * 60 * 60 * 1000, // 1 hora
                        });
                    }

                })
            );

        }
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}