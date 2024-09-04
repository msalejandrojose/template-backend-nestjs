import {User} from "../../domain/model/User";
import {Injectable} from "@nestjs/common";
import {Filter} from "../../domain/database/Filter";

@Injectable()
export class UserService{
    constructor(private user: User){}

    async getUser(username:string):Promise<any>{
        const filter = new Filter();
        filter.addEqualValue("username",username);
        return await this.user.getOneByFilter(filter);
    }
}