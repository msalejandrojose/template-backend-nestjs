import {Body,Controller,Post,HttpCode,HttpStatus,UseInterceptors} from '@nestjs/common';
import {AuthService} from "../../../application/auth/auth.service";
import {getEnv} from "../../../launcher/config/environment";
import {SingInInterceptor} from "../../interceptor/singIn.interceptor";

const { cookies } = getEnv();

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @UseInterceptors(SingInInterceptor)
    async signIn(@Body() signInDto: any) {
        return await this.authService.signIn(signInDto.username, signInDto.pass);
    }
}