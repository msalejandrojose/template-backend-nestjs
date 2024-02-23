import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { Model } from "../model/Model";
import { IModelService } from "../port/inbound/IModelService";
import { IRepository } from "../port/outbound/IRepository";

export class PrismaModelService implements IModelService{

    constructor(
        private repository: IRepository,
        //@Inject(forwardRef(() => Model)) private model: Model
    ){}
    getOne(){
        return {'asd':'123'};
    }
}