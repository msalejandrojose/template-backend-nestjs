"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
class Model {
    getModel() {
        return this.model;
    }
    getColumnId() {
        if (this.columnId) {
            return this.columnId;
        }
        else {
            false;
        }
    }
    getDto() {
        if (this.dto) {
            return this.dto;
        }
        else {
            return false;
        }
    }
}
exports.Model = Model;
//# sourceMappingURL=Model.js.map