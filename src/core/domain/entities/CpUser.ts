import { Model } from "./Model";
import { CpUserClassDTO } from "src/core/shared/CpUserClassDTO";

export class CpUser extends Model{
    constructor(){
        super();
        this.model = 'CpUser';
        this.columnId = 'id';
        this.dto = new CpUserClassDTO();
    }
}