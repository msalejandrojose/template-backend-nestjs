"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const common_1 = require("@nestjs/common");
class Log {
    static info(msg, foo) {
        const json = foo ? `\n${JSON.stringify(foo, null, 2)}` : '';
        common_1.Logger.log(`${msg} ${json}`);
    }
}
exports.Log = Log;
//# sourceMappingURL=Log.js.map