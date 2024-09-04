import { Model } from "./Model";
import {PrismaService} from "../../infrastructure/adapter/prisma/PrismaService";
import {Injectable} from "@nestjs/common";

@Injectable()
export class User extends Model{
    constructor(readonly service:PrismaService){
        super(service,'user','id','u');
    }
}