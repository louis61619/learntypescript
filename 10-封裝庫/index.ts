/*

功能: 定義一個操作數據的庫 支持Mysql Mssql MonnngoDb

要求1:Mysql Mssql MongoDb功能一樣都有 add update delete get方法

注意:約束統一的規範，以及代碼重用

解決方案: 需要約束規範所以要定義接口，需要代碼重用所以用到泛型

  1.接口: 在面相對向的編程中，接口是一規範的定義，他定義了行為和動作的規範

  2.泛型: 通俗理解，泛型就是解決 類 接口 方法的復用性
*/

interface DBI<T>{
  add(info:T):boolean;
  update(info:T,id:number):boolean;
  delete(id:number):boolean;
  get(id:number):any[];
}

//定義一個操作 Mysql數據庫的類     注意:要實現泛型接口 這個類也應該是一個泛型類

class MySqlDb<T> implements DBI<T>{
  constructor() {
    console.log('和數據庫建立連接')
  }
  add(info: T): boolean {
    console.log(info);
    return true;
    // throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {

    var list=[
      {
        title:'xxx',
        desc:'xxxxxx'
      },
      {
        title:'xxx',
        desc:'xxxxxx'
      }
    ]
    return list;
    // throw new Error("Method not implemented.");
  }

}
//定義一個操作Mssql數據庫的類

class MsSql<T> implements DBI<T>{
  add(info: any): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: any, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
  
}

//操作用戶表 定義一個User類和數據表做映射

class User{
  username:string | undefined;
  password:string | undefined;
}

var u=new User();
u.username='張三'
u.password='123456';

var oMysql = new MySqlDb<User>(); //類作為參數約束傳入的數據類型

oMysql.add(u)

//獲取User表 ID=4的數據
var data=oMysql.get(4)
console.log(data)