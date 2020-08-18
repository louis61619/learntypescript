"use strict";
//ts中類的定義
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//es5:
// function Person(name) {
//   this.name = name;
//   this.run=function() {
//     console.log(this.name)
//   }
// }
// var p=new Person('張三')
// p.run()
//ts中定義類
// class Person{
//   name:string; //屬性 前面省略了public關鍵詞
//   constructor(n:string)  { //構造函數 實例化類的時候觸發的方法
//     this.name=n;
//   }
//   run():void{
//     alert(this.name);
//   }
// }
// var p=new Person('張三');
// p.run()
//ts中實現get和set
// class Person{
//   name:string;
//   constructor(name:string){
//     this.name=name;
//   }
//   getName():string{
//     return this.name;
//   }
//   setName(name:string):void{
//     this.name=name;
//   }
// }
// var p=new Person('張三');
// alert(p.getName());
// p.setName('李四');
// alert(p.getName())
//ts中實現繼承 extends、 super
// class Person{
//   name:string;
//   constructor(name:string){
//     this.name=name;
//   }
//   run():string{
//     return `${this.name}在運動`
//   }
// }
// var p=new Person('王五')
// alert(p.run())
// class Web extends Person{
//   constructor(name:string){
//     super(name); /*初始化父類的構造函數*/
//   }
// }
// var w= new Web('李四');
// alert(w.run())
//ts中繼承的探討 父類的方法和子類的方法一致
// class Person{
//   name:string;
//   constructor(name:string){
//     this.name=name;
//   }
//   run():string{
//     return `${this.name}在運動`
//   }
// }
// class Web extends Person{
//   constructor(name:string){
//     super(name); /*初始化父類的構造函數*/
//   }
//   run():string{
//     return `${this.name}在運動-子類`
//   }
//   work() {
//     alert(`${this.name}在工作`)
//   }
// }
// var w= new Web('李四');
// alert(w.run())
//3.類裡面的修飾符 typescript裡面定義屬性的時候給我們提供了 三種修飾符
//public : 公有           在類裡面 子類 類外面都可以訪問
//protected : 保護類型    在類裡面、子類裡面可以訪問，在類外部沒法訪問
//private : 私有          在類裡面可以訪問，子類、類外部都沒法訪問
//屬性如果不加修飾符 默認為public
// class Person{
//   public name:string;
//   constructor(name:string){
//     this.name=name;
//   }
//   run():string{
//     return `${this.name}在運動`
//   }
// }
// class Web extends Person{
//   constructor(name:string){
//     super(name); /*初始化父類的構造函數*/
//   }
//   run():string{
//     return `${this.name}在運動-子類`
//   }
//   work() {
//     alert(`${this.name}在工作`)
//   }
// }
// var w= new Web('李四');
//類外部訪問公有屬性
// var p = new Person('哈哈哈')
// alert(p.name);
//protected: 保護類型
//類外部無法訪問保護類型的屬性(會報錯)
// class Person{
//   protected name:string;  //保護類型
//   constructor(name:string){
//     this.name=name;
//   }
//   run():string{
//     return `${this.name}在運動`
//   }
// }
// var p=new Person('哈哈哈')
// alert(p.name)
//private : 私有 在類裡面可以訪問，子類、類外部沒法訪問
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        return this.name + "\u5728\u904B\u52D5";
    };
    return Person;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    return Web;
}(Person));
