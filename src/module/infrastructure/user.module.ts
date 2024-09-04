import {forwardRef,Module} from '@nestjs/common';
import {UserController} from "../../infrastructure/controller/user/user.controller";
import {UserService} from "../../application/service/user.service";
import {PrismaModule} from "./prisma.module";
import {User} from "../../domain/model/User";
import {AuthModule} from "./auth.module";

@Module({
    imports:[
        PrismaModule,
        forwardRef(() => AuthModule),
    ],
    controllers: [
        UserController
    ],
    providers:[
        UserService,
        User
    ],
    exports:[
        UserService
    ]
})
export class UserModule {}