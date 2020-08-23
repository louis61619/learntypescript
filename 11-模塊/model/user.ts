import {MySqlDb} from '../modules/db'

//定義數據庫的映射

class UserClass{
  username:string | undefined;
  password:string | undefined;
}

var UserModel=new MySqlDb<UserClass>();
export {
  UserClass,UserModel
}