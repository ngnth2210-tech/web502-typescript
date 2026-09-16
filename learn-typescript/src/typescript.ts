console.log("typescript");

//1. number, string, boolean
let age: number = 25;
age = 30;

let myName: string = "hoadv";
myName = "20";

let dihockhong: boolean = true;
dihockhong = false;

//2. type inference: tu suy ra kieu, khong can khai bao
let myYear = 2005;
//myYear = "20009"; => error

//3. object: chua nhieu thuoc tinh
const student: { name: string; age: number; isActive: boolean } = {
    name: "hoadv",
    age: 34,
    isActive: true,
};
console.log(student);

//4. array: [] chua nhieu phan tu cung kieu
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob", "Charlie"];

//mang chua nhieu object: const products = [{}, {}]
const products: { name: string; price: number }[] = [
    { name: "Bàn phím", price: 12 },
    { name: "Chuột", price: 5 },
];
console.log(numbers, names, products);

//5. tuple: mang co do dai co dinh, kieu tung vi tri dinh san
let tuple: [string, number] = ["Alice", 25];
//tuple = ["Bob", 30, "extra"]; => error: sai do dai
console.log(tuple);

//6. any: nhan moi gia tri, bo qua kiem tra kieu (han che dung)
let data: any = 10;
data = "Hello";
data = true;

//7. union: bien thuoc nhieu kieu
let result: number | string;
result = 42;
result = "Success";
//result = true; => error

//literal: chi nhan dung may gia tri liet ke
let status: "success" | "error" | "loading";
status = "success";
//status = "failed"; => error
console.log(data, result, status);

//8. null va undefined
let value: string | null = null;
let score: number | undefined = undefined;
console.log(value, score);

//9. unknown: giong any nhung phai kiem tra kieu truoc khi dung
let input: unknown = 42;
if (typeof input === "number") {
    let num: number = input;
    console.log(num);
}

//10. type assertion: ep TypeScript hieu gia tri thuoc kieu nao
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
console.log(strLength);
