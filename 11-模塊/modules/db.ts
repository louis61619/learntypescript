// var dbUrl='xxxxx';

// function getData():any[]{
//   console.log('獲取數據庫的數據')

//   return [
//     {
//       title:'xxxxxxx'
//     }
//   ]
// }
// function save() {
//   console.log('保存數據成功')
// }

// export {dbUrl, getData, save}


interface DBI<T>{
  add(info:T):boolean;
  update(info:T,id:number):boolean;
  delete(id:number):boolean;
  get(id:number):any[];
}

//定義一個操作 Mysql數據庫的類     注意:要實現泛型接口 這個類也應該是一個泛型類

export class MySqlDb<T> implements DBI<T>{
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