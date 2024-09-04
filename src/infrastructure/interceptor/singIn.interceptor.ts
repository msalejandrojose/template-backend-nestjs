import {Injectable,NestInterceptor,ExecutionContext,CallHandler} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express';
import {getEnv} from "../../launcher/config/environment";
import {SignInDto} from "../../application/auth/dto/SignInDto";
import {AuthService} from "../../application/auth/auth.service";

const { keys } = getEnv();

@Injectable()
export class SingInInterceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();

        return next.handle().pipe(
            tap((signInDto:SignInDto) => {
                response.setHeader('x-access-token', signInDto.access_token);
                response.cookie('refresh_token', signInDto.refresh_token, {
                    httpOnly: true,
                    secure: false, // Solo en producción
                    maxAge: keys.refreshTokenTime * 24 * 60 * 60 * 1000, // 1 hora
                });
            }),
        );
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}