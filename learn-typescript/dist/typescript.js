"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("typescript");
let age = 25;
age = 30;
let myName = "hoadv";
myName = "20";
//kiểu boolean
let dihockhong = true;
dihockhong = false;
let myYear = 2005;
//myYear = "20009"; => error\
//object: chua nhiều thuộc tính
const student = {
    name: "hoadv",
    age: 34,
    isActive: true,
};
//array: [] chứa nhiều phần tử cùng kiểu
let numbers = [1, 2, 3, 4];
let names = ["Alice", "Bob", "Charlie"];
console.log(numbers);
console.log(names);
//tuple: mảng có độ dài cố định, kiểu từng vị trí định sẵn
let tuple = ["Alice", 25];
//tuple = ["Bob", 30, "extra"]; => error: sai độ dài
//any: nhận mọi giá trị, bỏ qua kiểm tra kiểu (hạn chế dùng)
let data = 10;
data = "Hello";
data = true;
//union: biến thuộc nhiều kiểu
let result;
result = 42;
result = "Success";
//result = true; => error
//literal: chỉ nhận đúng mấy giá trị liệt kê
let status;
status = "success";
//status = "failed"; => error
//null và undefined
let value = null;
let score = undefined;
//unknown: giống any nhưng phải kiểm tra kiểu trước khi dùng
let input = 42;
if (typeof input === "number") {
    let num = input;
    console.log(num);
}
//type assertion: ép TypeScript hiểu giá trị thuộc kiểu nào
let someValue = "This is a string";
let strLength = someValue.length;
console.log(tuple, data, result, status, value, score, strLength);
//mảng chứa nhiều object: const products = [{}, {}]
const products = [
    { name: "Bàn phím", price: 12 },
    { name: "Chuột", price: 5 },
];
console.log(products);
