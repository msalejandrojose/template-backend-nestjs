import { IRepository } from "src/core/domain/port/outbound/IRepository";

export class PrismaRepository implements IRepository{
    getOne(objectId: string | number): Promise<false | Object> {
        throw new Error("Method not implemented.");
    }

}