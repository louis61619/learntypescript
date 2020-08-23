import {MySqlDb} from '../modules/db'

//定義數據庫的映射

class ArticleClass{
  title:string | undefined;
  desc:string | undefined;
}

var ArticleModel=new MySqlDb<ArticleClass>();
export {
  ArticleClass,ArticleModel
}