"use strict";
/*
  裝飾器: 裝飾器是一種特殊類型的聲明，他能夠被附加到類聲明，方法，屬性或參數上，可以修改類的行為。

  通俗的講，裝飾器是一個方法，可以注入到類、方法、屬性參數上來擴展類、屬性、方法、參數的功能。

  常見的裝飾器有: 類裝飾器、屬性裝飾器、方法裝飾器、參數裝飾器

  裝飾器的寫法: 普通裝飾器(無法傳參)、裝飾器工廠(可傳參)

  裝飾器是過去幾年中JS最大的成就之一，已是ES7的標準特性之一
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//1.類裝飾器: 類裝飾器是在聲明之前被聲明(緊靠著類聲明)。
//裝飾器應用於類構造函數，可以用來監視，修改或替換類定義。傳入一個參數
//裝飾器
// function logClass(params:any){
//   console.log(params)
//   //params 就是當前類
//   params.prototype.apiUrl='xxx';
//   params.prototype.run=function() {
//     console.log('一個RUN方法')
//   }
// }
// @logClass
// class HttpClient{
//   constructor() {
//   }
//   getData() {
//   }
// }
// var http:any=new HttpClient();
// console.log(http.apiUrl)
//裝飾器工廠(可傳參)
// function logClass(params:string){
//   return function(target:any){
//     console.log(target);
//     console.log(params);
//     target.prototype.apiUrl=params;
//   }
// }
// @logClass('http://www.google.com')
// class HttpClient{
//   constructor() {
//   }
//   getData() {
//   }
// }
// var http:any=new HttpClient();
// console.log(http.apiUrl)
/*類裝飾器
  下面是一個重載構造函數的例子
  類裝飾器表達式會在運行時當作函數被調用，類的構造函數作為其唯一的參數
  如果類裝飾器返回一個值，他會使用提供的構造函數來替換類的聲明。
*/
// function logClass(target:any){
//   console.log(target)
//   return class extends target{
//     apiUrl:any='我是修改後的數據';
//     getData() {
//       this.apiUrl = this.apiUrl+'----------'
//       console.log(this.apiUrl)
//     }
//   }
// }
// @logClass
// class HttpClient{
//   public apiUrl:string | undefined;
//   constructor() {
//     this.apiUrl='我是構造函數裡面的apiUrl'
//   }
//   getData() {
//     console.log(this.apiUrl)
//   }
// }
// var http=new HttpClient();
// http.getData();
/*
  屬性裝飾器
  屬性裝飾器表達式會在運行時當作函數被調用，傳入下列2個參數
  1.對於靜態成員來說是類的構造函數，對於實例成員是類的原型對象。
  2.成員的名字
*/
// //類裝飾器
// function logClass(params:string){
//   return function(target:any){
//     // console.log(target);
//     // console.log(params);
//   }
// }
// //屬性裝飾器
// function logProperty(params:any){
//   return function(target:any,attr:any){
//     console.log(target);
//     console.log(attr);
//     target[attr]=params;
//   }
// }
// @logClass('xxxxx')
// class HttpClient{
//   @logProperty('http://google.com')
//   public url:any | undefined;
//   constructor() {
//   }
//   getData() {
//     console.log(this.url)
//   }
// }
// var http = new HttpClient();
// http.getData();
/*
  方法裝飾器
  它會被應用到方法的 屬性描述上，可以用來監視、修改或者替換方法定義

    方法裝飾器會在運行時傳入下列3個參數
      1.對於靜態成員來說是類的構造函數，對於實例成員是類的原型對象
      2.成員的名字
      3.成員的屬性描述符
*/
//方法裝飾器一
// function get(params:any){
//   return function(target:any, methodName:any, desc:any) {
//     console.log(target);
//     console.log(methodName);
//     console.log(desc)
//     target.apiUrl='xxxx';
//     target.run=function() {
//       console.log('run')
//     }
//   }
// }
// class HttpClient{
//   public url:any | undefined;
//   constructor() {
//   }
//   @get('http://www.google.com')
//   getData() {
//     console.log(this.url)
//   }
// }
// var http:any = new HttpClient();
// console.log(http.apiUrl)
// http.run()
//方法裝飾器二
// function get(params:any){
//   return function(target:any, methodName:any, desc:any) {
//     console.log(target);
//     console.log(methodName);
//     console.log(desc)
//     //修改裝飾器的方法，把裝飾器方法裡面傳入的參數改為string類型
//     //1.保存當前的方法
//     var oMethod = desc.value;
//     desc.value=function(...args:any[]){
//       args = args.map((value) => {
//         return String(value)
//       })
//       console.log(args)
//       oMethod.apply(this,args)
//     }
//   }
// }
// class HttpClient{
//   public url:any | undefined;
//   constructor() {
//   }
//   @get('http://www.google.com')
//   getData(...args:any[]) {
//     console.log(args)
//     console.log('我是getData裡面的方法')
//   }
// }
// var http=new HttpClient();
// http.getData(133,'xxxxx')
/*
  方法參數裝飾器
  方法參數裝飾器表達式會在運行時當作函數被調用，可以使用參數裝飾器為類的原型增加一些元素數據，傳入下列3個參數

      1.對於靜態成員來說是類的構造函數，對於實例成員是類的原型對象
      2.方法的名字
      3.參數在函數參數列表中的索引
*/
// function logParams(params:any){
//   return function(target:any,paramsName:any,paramsIndex:any){
//     console.log(params)
//     console.log(target)
//     console.log(paramsName)
//     console.log(paramsIndex)
//     target.apiUrl=params;
//   }
// }
// class HttpClient{
//   public url:any | undefined;
//   // public apiUrl:any;
//   constructor() {
//   }
//   getData(@logParams('XXXXXX') uuId:any) {
//     console.log(uuId)
//   }
// }
// var http = new HttpClient();
// http.getData(12345646);
// console.log(http)
//裝飾器的執行順序
function logClass1(params) {
    return function (target) {
        console.log('類裝飾器1');
    };
}
function logClass2(params) {
    return function (target) {
        console.log('類裝飾器2');
    };
}
function logAttribute(params) {
    return function (target, attrName) {
        console.log('屬性裝飾器');
    };
}
function logMethod(params) {
    return function (target, attrName, desc) {
        console.log('方法裝飾器');
    };
}
function logParams1(params) {
    return function (target, attrName, desc) {
        console.log('方法參數裝飾器1');
    };
}
function logParams2(params) {
    return function (target, attrName, desc) {
        console.log('方法參數裝飾器2');
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        return true;
    };
    HttpClient.prototype.setData = function (attr1, attr2) {
    };
    __decorate([
        logAttribute()
    ], HttpClient.prototype, "apiUrl", void 0);
    __decorate([
        logMethod()
    ], HttpClient.prototype, "getData", null);
    __decorate([
        __param(0, logParams1()), __param(1, logParams2())
    ], HttpClient.prototype, "setData", null);
    HttpClient = __decorate([
        logClass1('http://www.google.com'),
        logClass2('xxxx')
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
