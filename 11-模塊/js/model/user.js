"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserClass = void 0;
var db_1 = require("../modules/db");
//定義數據庫的映射
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
exports.UserClass = UserClass;
var UserModel = new db_1.MySqlDb();
exports.UserModel = UserModel;
