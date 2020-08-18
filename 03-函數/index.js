"use strict";
//函數的定義
//es5定義函數的方法
//函數聲明法
// function run() {
//   return 'run'
// }
//匿名函數
// var run2 = function() {
//   return 'run2'
// }
//ts中定義函數的方法
//函數聲明法
// function run():string {
//   return 'run'
// }
//匿名函數
// var run2 = function():number{
//   return 1233;
// }
//ts中定義的方法傳參
// function getInfo(name:string, age:number):string{
//     return `${name} --- ${age}`
// }
// alert(getInfo('你是誰', 20))
// var getInfo = function (name:string, age:number):string{
//   return `${name} --- ${age}`
// }
// alert(getInfo('你是誰', 20))
//沒有返回值的方法
// function run():void{
//   console.log('run')
// }
//方法可選參數
//es5中實際傳遞的參數和函數參數可以不一樣，但是ts中必須一樣，如果不一樣就需要配置可選參數
// function getInfo(name:string, age?:number):string{
//   if(age){
//     return `${name} --- ${age}`
//   }else{
//     return `${name} --- 年齡保密`
//   }
// }
// alert(getInfo('張三',111111))
// alert(getInfo('張三'))
//默認參數
//es5中無法設置默認參數，es6和ts都可以設置默認參數
// function getInfo(name:string, age:number=20) {
//   if(age) {
//     return `${name} --- ${age}`
//   }else{
//     return `${name} --- 年齡保密`
//   }
// }
// alert(getInfo('張三', 30))
//剩餘參數
// function sum(a:number,b:number,c:number,d:number):number{
//   return a+b+c+d
// }
// alert(sum(1,2,3,4))
//三點運算符 接受新參數傳過來的值
// function sum(...result:number[]):number{
//   var sum=0;
//   for(var i=0;i<result.length;i++) {
//     sum += result[i]
//   }
//   return sum
// }
// alert(sum(1, 2, 3, 4))
// function sum(a:number,...result:number[]):number{
//   var sum=a;
//   for(var i=0;i<result.length;i++) {
//     sum += result[i]
//   }
//   return sum
// }
// alert(sum(65, 2, 3, 4))
//函數重載
//java中方法的重載，重載指的是兩個或兩個以上同名函數，但它們的參數不一樣，這時會出現函數重載的情況
//typescript中的重載: 通過為同一個函數提供多個函數類型定義來試下多種功能的目的
//ts為了兼容es5 以及 es6 重載的寫法和java中有區別
//es5中出現同名方法，下面的會替換上面的方法
// function css(config) {
// }
// function css(config, value) {
// }
//ts中的重載 //同樣的方法，傳入不同的參數，執行不同的功能
// function getInfo(name:string):string;
// function getInfo(age:number):string;
// function getInfo(str:any):any{
//   if(typeof str === 'string') {
//     return '我叫 : ' + str
//   }else{
//     return '我的年齡是 : ' + str
//   }
// }
// alert(getInfo('張三'))
// alert(getInfo(20))
// function getInfo(name:string):string;
// function getInfo(name:string, age:number):string;
// function getInfo(name:any, age?:any):any{
//   if(age) {
//     return '我叫 : '+name+'我的年齡是 : '+age
//   }else{
//     return '我叫'+name
//   }
// }
// alert(getInfo('張三'))
// alert(getInfo('張三', 20))
//箭頭函數
//es6 箭頭函數this指向上下文
// setTimeout(function() {
//   alert('run')
// }, 1000)
setTimeout(function () {
    alert('run');
}, 1000);
