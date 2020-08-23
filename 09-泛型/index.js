"use strict";
/*
  泛型，軟件工程中，我們不僅要創建一致的定義良好的API，同時也要考慮可重用性。
  組件不僅能夠支持當前的數據類型，同時也能支持未來的數據類型，這在創建大型系統時為你提供了十分靈活的功能。

  在象C#和JAVA這樣的語言中，可以使用泛型來創建可重用的組件，一個組件可以支持多種類型的數據。
  這樣用戶就可以以自己的數據類型來使用組件。

  通俗理解； 泛型就是解決 類 接口 方法的復用性，以及對不特定數據類型的支持

*/
//傳入字串 返回子串
// function getData(value:string):string{
//   return value;
// }
//泛型: 可以支持不特定的數據類型 要求: 傳入的參數和返回的參數一致
//T表示泛型， 具體甚麼類型是調用這個方法的時候決定的
// function getData<T>(value:T):T{
//   return value
// }
// getData<number>(1111)
// //泛型類: 比如有個最小堆算法，需要同時支持反回數字和字串兩種類型。 通過泛型來實現
// class MinClass{
//   public list:number[]=[]
//   add(num:number){
//     this.list.push(num)
//   }
//   min(){
//     var minNum = this.list[0];
//     for(var i=0;i<this.list.length;i++){
//       if(minNum>this.list[i]){
//         minNum=this.list[i]
//       }
//     }
//     return minNum
//   }
// }
// var m = new MinClass();
// m.add(2);
// m.add(222);
// m.add(22222);
// m.add(2222222);
// alert(m.min())
//------------------------------
// class MinClass<T>{
//   public list:T[]=[]
//   add(num:T){
//     this.list.push(num)
//   }
//   min():T{
//     var minNum = this.list[0];
//     for(var i=0;i<this.list.length;i++){
//       if(minNum>this.list[i]){
//         minNum=this.list[i]
//       }
//     }
//     return minNum
//   }
// }
// var m = new MinClass<number>(); //實例化類 並且制定了T的代表的類型是string
// m.add(1);
// m.add(222);
// m.add(22222);
// m.add(2222222);
// alert(m.min())
//函數接口
// interface ConfigFn{
//   (value1:string,value2:string):string;
// }
// var setData:ConfigFn=function(value1:string,value2:string):string{
//   return value1+value2
// }
// setData('name','張三')
//泛型接口
//-----------
// interface ConfigFn{
//   <T>(value:T):T;
// }
// var getData:ConfigFn=function<T>(value:T):T{
//   return value;
// }
// getData<string>('張三');
//------------
// interface ConfigFn<T>{
//   (value:T):T;
// }
// function getData<T>(value:T):T{
//   return value;
// }
// var myGetData:ConfigFn<string>=getData;
// myGetData('11111111')
//把類作為參數類型的泛型類
//泛型類:泛型可以幫助我們避免重複的代碼以及對不特定數據的支持(類型校驗)，下面我們看看把類當作參數的泛型類
//1.定義一個類
//2.把類當作參數來約束數據傳入的類型
//定義一個User的類，這個類的作用是映射數據庫字段
//然後定義一個MysqlDB的類，這個類用於操作數據庫
//然後把User類作為參數傳入到MyaqlDB中
// var user:any=new user({
//   userName: '張三',
//   password:'123456'
// })
// var Db = new MysqlDb();
// Db.add(user)
// class User{
//   username:string | undefined;
//   password:string | undefined;
// }
// class MysqlDb{
//   add(user:User):boolean{
//     return true;
//   }
// }
// var u = new User();
// u.username='張三';
// u.password='123456';
// var Db=new MysqlDb();
// Db.add(u)
//----------------------
// class ArticleCate{
//   title:string | undefined;
//   desc:string | undefined;
//   status:number | undefined;
// }
// class MysqlDb{
//   add(info:ArticleCate):boolean{
//     console.log(info)
//     return true;
//   }
// }
// var a = new ArticleCate();
// a.title='國內'
// a.desc='國內新聞'
// a.status=1
// var Db=new MysqlDb();
// Db.add(a)
//---------------------
//操作數據庫的泛型類
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.updated = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return MysqlDb;
}());
// //想給User增新數據
// //1. 定義一個User類 和數據庫進行映射
// class User{
//   username:string | undefined;
//   password:string | undefined;
// }
// var u = new User();
// u.username='張三';
// u.password='123456';
// var Db=new MysqlDb<User>();
// Db.add(u)
//2.定義一個ArticleCate類 和數據庫進行映射
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
//增加操作
// var a=new ArticleCate({
//   title:'分類',
//   desc:'111111111'
// })
// var Db = new MysqlDb<ArticleCate>();
// Db.add(a)
//修改數據
var a = new ArticleCate({
    title: '分類111',
    desc: '222'
});
a.status = 0;
var Db = new MysqlDb();
Db.updated(a, 12);
