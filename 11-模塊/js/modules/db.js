"use strict";
// var dbUrl='xxxxx';
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlDb = void 0;
//定義一個操作 Mysql數據庫的類     注意:要實現泛型接口 這個類也應該是一個泛型類
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
        console.log('和數據庫建立連接');
    }
    MySqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
        // throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.get = function (id) {
        var list = [
            {
                title: 'xxx',
                desc: 'xxxxxx'
            },
            {
                title: 'xxx',
                desc: 'xxxxxx'
            }
        ];
        return list;
        // throw new Error("Method not implemented.");
    };
    return MySqlDb;
}());
exports.MySqlDb = MySqlDb;
//定義一個操作Mssql數據庫的類
var MsSql = /** @class */ (function () {
    function MsSql() {
    }
    MsSql.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MsSql.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSql.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSql.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MsSql;
}());
