//接口的作用 : 在面對象的編程中，接口是一種規範的定義，它定義了行為和動作的規範，在程序設計裡面，接口起到一種限制和規範的作用。
//街口定義了某一批類所需要遵守的規範，接口不關心這些類的內部狀態數據，也不關心這些類裡方法的實現細節，它只規定這批類裡必須提供某些方法，提供這些方法的類就可以滿足實際需要。
//typescript中的接口類似於java，同時還增加了更靈活的接口類型，包括屬性、函數、可索引和類等。


//屬性接口 對json的約束

// function printLabel(labe:string):void{
//   console.log('printLabel')
// }

// printLabel('哈哈哈')

//ts中自定義方法傳入參數時 json進行約束

// function printLabel(labeInfo:{label:string}):void{
//   console.log('printLabel');
// }

// printLabel('哈哈哈') //錯誤

// printLabel({name:'張三'}) //錯誤

// printLabel({label:'張三'}) //正確

//對批量方法傳入參數進行約束

//接口: 行為和動作的規範，對批量方法進行約束


//就是傳入對象的約束 屬性接口
// interface FullName{
//   firstName:string; //注意:結束
//   secondName:string;
// }

// function printName(name:FullName){
//   //必須傳入對向 firstName secondName
//   console.log(name.firstName+'----'+name.secondName)

// } 

// var obj={
//   age:20,
//   firstName: '張',
//   secondName: '三'
// }

// printName(obj)

// function printInfo(info:FullName){
//   console.log(info.firstName+info.secondName)
// }

// printInfo({
//   firstName: '李',
//   secondName: '四'
// })

//接口，可選屬性

interface FullName{
  firstName:string;
  secondName?:string;
}

function getName(name:FullName){
  console.log(name)
}
//參數的順序可以不一樣
getName({
  firstName: 'firstName'

})