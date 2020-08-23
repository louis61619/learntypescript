"use strict";
/*

功能: 定義一個操作數據的庫 支持Mysql Mssql MonnngoDb

要求1:Mysql Mssql MongoDb功能一樣都有 add update delete get方法

注意:約束統一的規範，以及代碼重用

解決方案: 需要約束規範所以要定義接口，需要代碼重用所以用到泛型

  1.接口: 在面相對向的編程中，接口是一規範的定義，他定義了行為和動作的規範

  2.泛型: 通俗理解，泛型就是解決 類 接口 方法的復用性
*/
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
//操作用戶表 定義一個User類和數據表做映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '張三';
u.password = '123456';
var oMysql = new MySqlDb(); //類作為參數約束傳入的數據類型
oMysql.add(u);
//獲取User表 ID=4的數據
var data = oMysql.get(4);
console.log(data);
