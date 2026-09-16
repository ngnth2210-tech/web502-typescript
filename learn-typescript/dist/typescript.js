"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("typescript");
//1. number, string, boolean
let age = 25;
age = 30;
let myName = "hoadv";
myName = "20";
let dihockhong = true;
dihockhong = false;
//2. type inference: tu suy ra kieu, khong can khai bao
let myYear = 2005;
//myYear = "20009"; => error
//3. object: chua nhieu thuoc tinh
const student = {
    name: "hoadv",
    age: 34,
    isActive: true,
};
console.log(student);
//4. array: [] chua nhieu phan tu cung kieu
let numbers = [1, 2, 3, 4];
let names = ["Alice", "Bob", "Charlie"];
//mang chua nhieu object: const products = [{}, {}]
const products = [
    { name: "Bàn phím", price: 12 },
    { name: "Chuột", price: 5 },
];
console.log(numbers, names, products);
//5. tuple: mang co do dai co dinh, kieu tung vi tri dinh san
let tuple = ["Alice", 25];
//tuple = ["Bob", 30, "extra"]; => error: sai do dai
console.log(tuple);
//6. any: nhan moi gia tri, bo qua kiem tra kieu (han che dung)
let data = 10;
data = "Hello";
data = true;
//7. union: bien thuoc nhieu kieu
let result;
result = 42;
result = "Success";
//result = true; => error
//literal: chi nhan dung may gia tri liet ke
let status;
status = "success";
//status = "failed"; => error
console.log(data, result, status);
//8. null va undefined
let value = null;
let score = undefined;
console.log(value, score);
//9. unknown: giong any nhung phai kiem tra kieu truoc khi dung
let input = 42;
if (typeof input === "number") {
    let num = input;
    console.log(num);
}
//10. type assertion: ep TypeScript hieu gia tri thuoc kieu nao
let someValue = "This is a string";
let strLength = someValue.length;
console.log(strLength);
