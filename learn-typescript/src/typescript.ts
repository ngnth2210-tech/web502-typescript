console.log("typescript");

let age: number = 25;
age = 30;

let myName: string = "hoadv"
myName = "20";

//kiểu boolean
let dihockhong: boolean = true;
dihockhong = false;

let myYear = 2005;
//myYear = "20009"; => error\

//object: chua nhiều thuộc tính

const student: { name: string; age: number; isActive: boolean } = {
    name: "hoadv",
    age: 34,
    isActive: true,
};
//array: [] chứa nhiều phần tử cùng kiểu
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob", "Charlie"];

console.log(numbers);
console.log(names);

//tuple: mảng có độ dài cố định, kiểu từng vị trí định sẵn
let tuple: [string, number] = ["Alice", 25];
//tuple = ["Bob", 30, "extra"]; => error: sai độ dài

//any: nhận mọi giá trị, bỏ qua kiểm tra kiểu (hạn chế dùng)
let data: any = 10;
data = "Hello";
data = true;

//union: biến thuộc nhiều kiểu
let result: number | string;
result = 42;
result = "Success";
//result = true; => error

//literal: chỉ nhận đúng mấy giá trị liệt kê
let status: "success" | "error" | "loading";
status = "success";
//status = "failed"; => error

//null và undefined
let value: string | null = null;
let score: number | undefined = undefined;

//unknown: giống any nhưng phải kiểm tra kiểu trước khi dùng
let input: unknown = 42;
if (typeof input === "number") {
    let num: number = input;
    console.log(num);
}

//type assertion: ép TypeScript hiểu giá trị thuộc kiểu nào
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;

console.log(tuple, data, result, status, value, score, strLength);

//mảng chứa nhiều object: const products = [{}, {}]
const products: { name: string; price: number }[] = [
    { name: "Bàn phím", price: 12 },
    { name: "Chuột", price: 5 },
];
console.log(products);
