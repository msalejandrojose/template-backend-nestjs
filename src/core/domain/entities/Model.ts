import { DTO } from "src/core/shared/DTO";

export class Model {
    protected model: string;
    protected columnId: string;
    protected dto: DTO;

    getModel(): string {
        return this.model;
    }

    getColumnId(): string | false {
        if (this.columnId) {
            return this.columnId;
        } else {
            false;
        }
    }

    getDto(): DTO | false {
        if (this.dto) {
            return this.dto;
        } else {
            return false;
        }
    }
}