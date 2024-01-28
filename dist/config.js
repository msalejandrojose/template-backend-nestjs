"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const fs = require("fs");
const dotenv = require("dotenv");
class Config {
    static setConfig() {
        if (fs.existsSync('.env')) {
            dotenv.config();
            process.env.DATABASE_URL = "mysql://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_SCHEMA + "";
        }
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map