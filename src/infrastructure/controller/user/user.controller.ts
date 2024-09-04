import {Body,Controller,Get,Post,Req,UseInterceptors} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {User} from "../../../domain/model/User";
import {UserService} from "../../../application/service/user.service";
import { Request } from 'express';
import {AuthInterceptor} from "../../interceptor/auth.interceptor";
import {Private} from "../../decorator/auth.decorators";

@ApiTags('User')
@Controller('/user')
@Private()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @UseInterceptors(AuthInterceptor)
    async getUsers(@Req() req: Request){
        return await this.userService.getUser("AJ");
        // return await this.userService.getUser("3b0d2a20-6495-11ef-b97b-0a7727ea738f");
        // return await this.user.getRows();
    }

    @Post()
    async createUser(@Body() createUserDto: any) {
        // return await this.createUserUseCase.createUser(createUserDto);
    }


}
