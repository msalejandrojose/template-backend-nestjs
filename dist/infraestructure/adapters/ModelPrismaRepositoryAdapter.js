"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPrismaRepositoryAdapter = void 0;
const CpUser_1 = require("../../core/domain/entities/CpUser");
class ModelPrismaRepositoryAdapter {
    constructor(database, model) {
        this.database = database;
        this.model = model;
    }
    getOne(objectId) {
        this.model = new CpUser_1.CpUser();
        console.log(this.model.getModel());
        console.log(this.database[this.model.getModel()].findMany());
        console.log("ASD");
        throw new Error("Method not implemented.");
    }
    getOneValue(objectId, columnName) {
        throw new Error("Method not implemented.");
    }
    getOneByFilter(filter, columnNames) {
        throw new Error("Method not implemented.");
    }
    getOneValueByFilter(filter, columnName) {
        throw new Error("Method not implemented.");
    }
    getRows(filter, columnNames) {
        throw new Error("Method not implemented.");
    }
}
exports.ModelPrismaRepositoryAdapter = ModelPrismaRepositoryAdapter;
//# sourceMappingURL=ModelPrismaRepositoryAdapter.js.map