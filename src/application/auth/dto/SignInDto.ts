export class SignInDto{
    access_token: string;
    refresh_token: string;

    constructor(access_token:string,refresh_token:string){
        this.access_token=access_token;
        this.refresh_token=refresh_token;
    }
}

export enum JwtTokenError {
    ValidToken = 'ValidToken',
    TokenExpired = 'TokenExpiredError',
    JsonWebTokenError = 'JsonWebTokenError',
    NotBeforeError = 'NotBeforeError',
    InvalidSignature = 'InvalidSignature',
    MalformedToken = 'MalformedToken',
    UnknownError = 'UnknownError',
}