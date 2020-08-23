//函數類型接口: 對方法傳入的參數，以及返回值進行約束

//加密的函數類型接口

// interface encrpt{
//   (key:string, value:string):string;

// }

// var md5:encrpt=function(key:string, value:string):string{

//   //模擬操作

//   return key+value;
// }

// console.log(md5('name','張三'))

// var sha1:encrpt=function(key:string, value:string):string {
//   return key+'------'+value
// }

// console.log(sha1('name','李四'))


//可索引接口: 數組、對象的約束 (不常用)

//定義數組的方式

  // var arr:number[]=[1111111111,555555555]

  // var arr1:Array<string>=['11111111','2222']

// interface UserArr{
//   [index:number]:string
// }

// var arr:UserArr=['aaa','bbb']

// //可索引接口 對物件的約束

// interface UserObj{
//   [index:string]:string
// }

// var obj:UserObj={name:'張三'}

// //類類型接口 對類的約束 和 抽象類有點相似

// interface Animal{

//   name:string;

//   eat(str:string):void;
// }

// class Dog implements Animal{
//   name:string;
//   constructor(name:string){
//     this.name=name;
//   }
//   eat(){
//     console.log(this.name+'吃糧食')
//   }
// }

// var d = new Dog('小黑')

// d.eat();

// class Cat implements Animal{
//   name:string;
//   constructor(name:string){
//     this.name= name;
//   }
//   eat(food:string){
//     console.log(this.name+'吃'+food);
//   }
// }

// var c=new Cat('小花');
// c.eat('老鼠')

//接口的擴展

// interface Animal{
//   eat():void;
// }

// interface Person extends Animal{ //繼承
//   work():void;
// }

// class Web implements Person{ //實現
//   public name:string;
//   constructor(name:string){
//     this.name=name;
//   }
//   eat(){
//     console.log(this.name+'喜歡吃饅頭')
//   }
//   work(){
//     console.log(this.name+'寫代碼')
//   }
// }

// var w=new Web('小李');

// w.work()


//---------

interface Animal{
  eat():void;
}

interface Person extends Animal{ //繼承
  work():void;
}

class Programmer{
  public name:string;
  constructor(name:string){
    this.name=name;
  }
  coding(code:string){
    console.log(this.name+code)
  }
}

class Web extends Programmer implements Person{ //實現
  // public name:string;
  constructor(name:string){
    super(name)
  }
  eat(){
    console.log(this.name+'喜歡吃饅頭')
  }
  work(){
    console.log(this.name+'寫代碼')
  }
}

var w=new Web('小李');

// w.work()

w.coding('寫TS代碼')