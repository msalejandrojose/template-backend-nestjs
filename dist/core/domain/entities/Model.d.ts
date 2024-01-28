import { DTO } from "src/core/shared/DTO";
export declare class Model {
    protected model: string;
    protected columnId: string;
    protected dto: DTO;
    getModel(): string;
    getColumnId(): string | false;
    getDto(): DTO | false;
}
