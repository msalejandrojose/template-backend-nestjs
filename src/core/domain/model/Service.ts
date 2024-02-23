import { Injectable } from "@nestjs/common";

@Injectable()
export class Service{
    getHello(){
        return 'asd';
    }
}