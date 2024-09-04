import { IRepository } from "../port/outbound/IRepository";
import { Model } from "./Model";

export class OAuthToken extends Model{
    constructor(service:IRepository){
        super(service,'oauth_token','id','ot');
        // this.initializeRepository(repository);
    }
}


export interface OAuthTokenDto{
    id:	number,
    user_id: number,
    access_token: string,
    refresh_token: string,
    scope: string,
    expires_in:number,
    issued_at:Date,
    expires_at:Date,
    revoked_at:Date,
    token_type:string,
    ip_address:string,
    device_info:string,
    is_active:number

}