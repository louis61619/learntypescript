"use strict";
/*
  模塊的概念:

  我們可以把一些公共的功能單獨抽離程一個文作為一個模塊
  模塊裡面的變量 函數 類 等默認功能是私有的，如果我們要在外部訪問模塊裡面的數據(變量、函數、類)
  我們需要通過export暴露模塊立面的數據(變量、函數、類...)。
  暴露後我們通過 import 引入模塊，就可以使用模塊裡面暴露的數據(變量、函數、類....)
*/
Object.defineProperty(exports, "__esModule", { value: true });
// import { getData as get,save,dbUrl } from './modules/db'
// console.log(dbUrl)
// get();
// save();
/*
  export default 默認導出

  每個模塊都可以有一個默認導出，默認導出使用 default 關鍵字標記，並且一個模塊只有能有一個default導出
*/
// import {MySqlDb} from './modules/db';
// class User{
//   username:string | undefined;
//   password:string | undefined;
// }
// var u=new User();
// u.username='張三'
// u.password='123456';
// var oMysql = new MySqlDb<User>(); //類作為參數約束傳入的數據類型
// oMysql.add(u)
// //獲取User表 ID=4的數據
// var data=oMysql.get(4)
// console.log(data)
var user_1 = require("./model/user");
var article_1 = require("./model/article");
//增加數據
var u = new user_1.UserClass();
u.username = '張三';
u.password = '123456';
user_1.UserModel.add(u);
//獲取user表的數據
var res = user_1.UserModel.get(123);
console.log(res);
//獲取文章表的數據
var aRes = article_1.ArticleModel.get(1);
console.log(aRes);
