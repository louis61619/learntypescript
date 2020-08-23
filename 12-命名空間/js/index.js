"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  命名空間: 主要用於組織代碼，避免命名衝突
  模塊: ts的外部模塊簡稱，側重代碼的復用，一個模塊可能有多個命名空間

*/
var a_1 = require("./modules/a");
var d = new a_1.A.Dog('狼狗');
d.eat();
var dog = new a_1.B.Dog('小白');
dog.eat();
