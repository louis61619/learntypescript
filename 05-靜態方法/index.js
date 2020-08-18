"use strict";
//靜態屬性 靜態方法
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
//ES5內的靜態方法
// function Person() {
//   this.run = function() {
//   }
// }
// Person.name = '哈哈哈'
// Person.run2 = function() { //靜態方法
// }
// var p=new Person();
// Person.run2 //靜態方法的調用
//Jquery內的靜態方法
// function $(element){
//   return new Base(element)
// }
// $.get=function(){
// }
// function Base(element){
//   this.element = 獲取DOM節點
//   this.css=function(arr,value){
//     this.element.style.arr=value
//   }
// }
// $('box').css('color','red')
// $.length('url',function(){
// })
// class Per {
//   public name:string;
//   public age:number=20;
//   //靜態屬性
//   static sex="男"
//   constructor(name:string) {
//     this.name = name;
//   }
//   run() { //實例方法
//     alert(`${this.name}在運動`)
//   }
//   work() { //靜態方法
//     alert(`${this.name}在工作`)
//   }
//   static print() {  //靜態方法 裡面沒辦法直接調用類裡面的屬性
//     alert('print方法'+Per.sex)
//   }
// }
// var p = new Per('張三');
// Per.print();
// alert(Per.sex)
//多態: 父類定義一個方法不去實現，讓繼承他的子類去實現，每一個子類有不同的表現
//多態屬於繼承
// class Animal {
//   name:string;
//   constructor(name:string) {
//     this.name = name;
//   }
//   eat() {  //具體吃甚麼 不知道，具體吃什麼讓繼承他的子類去實現，每一個子類的表現不一樣
//     console.log('吃的方法')
//   }
// }
// class Dog extends Animal{
//   constructor(name:string){
//     super(name)
//   }
//   eat() {
//     return this.name+'吃肉'
//   }
// }
// class Cat extends Animal{
//   constructor(name:string){
//     super(name)
//   }
//   eat() {
//     return this.name+'吃老鼠'
//   }
// }
//typescript中的抽象類，它是提供其他類繼承的基類，不能直接被實例化
//用abstract關鍵字定義抽象類和抽象方法，抽象類中的抽象方法布包和具體實現並且避續再派生類中實現
//abstract抽象方法只能放在抽象類裡面
//抽象類和抽象方法用來定義標準， Animal這個類要求它的子類必須包含eat方法
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log('其他方法可以不實現');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    //抽象類的子類必須實現抽象類裡面的抽象方法
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃糧食');
    };
    return Dog;
}(Animal));
var d = new Dog('小花花');
d.eat();
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.run = function () {
    };
    Cat.prototype.eat = function () {
        console.log(this.name + '吃魚');
    };
    return Cat;
}(Animal));
var c = new Cat('小花貓');
c.eat();
