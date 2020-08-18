//boolean 類型 true false

// var flag:boolean=true

// flag=false

//數字類型 (number)

// var a:number=123
// console.log(a)

  // a="str" //錯誤寫法

  // a=12.3

//字符串類型(string)
  // let str:string="this is ts"
  // //str=12 //錯誤寫法
  // //str=false //錯誤寫法
  // str="你好ts"
  // console.log(str)

//數組類型(array) ts中定義數組有兩種方式

//es5 var arr=[1, "2323", false]

//1.第一種定義數組的方式

// let arr:number [] = [1, 2, 34, 5435]

// console.log(arr)

// let arr:string[]=["php","js","golang"]

// console.log(arr)

//2.第二種定義數組的方式

  // let arr:Array<number> = [11, 23, 33566, 66448]

  // console.log(arr)

  // let arr:Array<string>=["php", "js", "golang"]

  // console.log(arr)

//元組類型 (tuple) 屬於數組的一種

  // let arr: [string, number, boolean] = ['ts', 3.18, true]

  // console.log(arr)

// 枚舉類型

  // enum Flag {success=1, error=-1}

  // var f:Flag=Flag.error

  // console.log(f)

  // enum Flag {success=1, error=-1}

  // var f:Flag=Flag.error

  // console.log(Flag.error)


  // enum Color {red, blue, orange}

  // var c:Color = Color.red

  // console.log(c) //輸出的數字為排序位置


  // enum Color {red, blue=5, orange}

  // var c:Color = Color.orange

  // console.log(c) //輸出的數字為接續上一個


//任意類型

  // var num:any = 123;

  // num='str'

  // num=['111',2222]

//任意類型的用處

  // var oBox:any = document.getElementById('box')

  // oBox.style.color = 'red'


//undefined

  // var num:number | undefined;

  // num=123;

  // console.log(num)

//定義沒有賦值就是undefined

  // var num:number | undefined;

  // console.log(num)

//一個元素可能是null, undefined, number

  // var num:null | undefined | number

  // num=111111;

  // console.log(num)

//void類型: typescript中的void表示沒有任何類型，一般用於定義方法的時候方法沒有返回值

//es5的定義方法

  // function run():void {
  //   console.log('run')
  // }

  // run();


  function run():number{
    
    return 1222;
  }

  console.log(run())

//never類: 是其他類型，代表從不會出現的值

  // var a:undefined;

  // a=undefined;


  // var b:null

  // b=null;

  // var a:never;

  //a=123 //錯誤寫法

  // a=(() => {
    
  //   throw new Error('錯誤')
  // })()

//函數的定義