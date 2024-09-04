import {Inject,Injectable,UnauthorizedException} from '@nestjs/common';
import {promisify} from "util";
import {pbkdf2 as pbkdf2Callback,randomBytes} from "crypto";
import {JwtService, TokenExpiredError, JsonWebTokenError} from "@nestjs/jwt";
import {UserService} from "../service/user.service";
import {JwtTokenError,SignInDto} from "./dto/SignInDto";
import {getEnv} from "../../launcher/config/environment";

const { keys } = getEnv();

@Injectable()
export class AuthService {

    private readonly ITERATIONS = 10000;
    private readonly KEY_LENGTH = 32;
    private readonly DIGEST = 'sha512';

    private pbkdf2 = promisify(pbkdf2Callback);

    constructor(
        @Inject('ACCESS_TOKEN_JWT_SERVICE') private readonly accessTokenJwtService: JwtService,
        @Inject('REFRESH_TOKEN_JWT_SERVICE') private readonly refreshTokenJwtService: JwtService,
        private userService: UserService
        ){}

    async signIn(username: string, password: string): Promise<SignInDto> {
        const user = await this.userService.getUser(username)
        const verifyPass = await this.verifyPassword(password,user.pass);
        if (!verifyPass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.username };
        return new SignInDto(
            await this.accessTokenJwtService.signAsync(this.getPayloadByUser(user)),
            await this.refreshTokenJwtService.signAsync(this.getPayloadByUser(user))
        );
    }

    async refreshToken(singInDto:SignInDto):Promise<SignInDto>{
        if(!singInDto.access_token || !singInDto.refresh_token){
            throw new UnauthorizedException();
        }
        const accessTokenValidate: JwtTokenError = await this.verifyToken(singInDto.access_token,keys.privateKey);
        const refreshTokenValidate: JwtTokenError = await this.verifyToken(singInDto.refresh_token,keys.secondaryKey);
        this.checkTokenErrors(accessTokenValidate,refreshTokenValidate);
        const payload = await this.getPayloadToken(singInDto.refresh_token,keys.secondaryKey);
        return new SignInDto(
            await this.accessTokenJwtService.signAsync(this.getPayloadByPayload(payload)),
            await this.refreshTokenJwtService.signAsync(this.getPayloadByPayload(payload))
        );
    }

    protected async encryptPassword(password: string): Promise<string> {
        const salt = randomBytes(16).toString('hex');
        const derivedHash = await this.pbkdf2(
            password,
            salt,
            this.ITERATIONS,
            this.KEY_LENGTH,
            this.DIGEST
        );
        return `${salt}$${derivedHash.toString('hex')}`;
    }

    protected async verifyPassword(password: string, hash: string): Promise<boolean> {
        const [salt, storedHash] = hash.split('$');
        const derivedHash = await this.pbkdf2(
            password,
            salt,
            this.ITERATIONS,
            this.KEY_LENGTH,
            this.DIGEST
        );
        return derivedHash.toString('hex') === storedHash;
    }

    async verifyToken(token,pass):Promise<JwtTokenError>{
        try{
            let valid = await this.accessTokenJwtService.verifyAsync(
                token,
                {
                    secret: pass
                }
            );
        }catch(exception){
            if (exception instanceof TokenExpiredError) {
                return JwtTokenError.TokenExpired;
            } else if (exception instanceof JsonWebTokenError) {
                return JwtTokenError.JsonWebTokenError;
                // Podrías añadir lógica adicional para distinguir entre tipos específicos dentro de JsonWebTokenError
            } else {
                return JwtTokenError.UnknownError;
            }
        }
        return JwtTokenError.ValidToken;
    }
    async getPayloadToken(token,pass){
        return await this.accessTokenJwtService.verifyAsync(
            token,
            {
                secret: pass
            }
        );
    }



    protected checkTokenErrors($accessTokenError,$refreshTokenError){
        if(
            !(($accessTokenError == JwtTokenError.ValidToken || $accessTokenError == JwtTokenError.TokenExpired) &&
            ($refreshTokenError == JwtTokenError.ValidToken))
        ){
            throw new UnauthorizedException();
        }
    }

    getPayloadByUser(user){
        return { sub: user.id, username: user.username };
    }

    getPayloadByPayload(payload){
        return { sub: payload.sub, username: payload.username };
    }
}