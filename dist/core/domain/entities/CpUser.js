"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpUser = void 0;
const Model_1 = require("./Model");
const CpUserClassDTO_1 = require("../../shared/CpUserClassDTO");
class CpUser extends Model_1.Model {
    constructor() {
        super();
        this.model = 'CpUser';
        this.columnId = 'id';
        this.dto = new CpUserClassDTO_1.CpUserClassDTO();
    }
}
exports.CpUser = CpUser;
//# sourceMappingURL=CpUser.js.map