"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Lab 3
//1. Hàm tính điểm trung bình (arrow function + rest parameter)
//rest parameter: gom các đối số rời rạc thành một mảng, phải đứng cuối danh sách tham số
const averageScore = (...scores) => {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
};
const checkNumber = (n) => {
    return n % 2 === 0 ? "even" : "odd";
};
//3. Hàm tạo thông tin người dùng (default + optional parameter)
//age? là tùy chọn, role có giá trị mặc định nên không truyền vẫn có "user"
const createUser = (name, age, role = "user") => {
    if (age !== undefined) {
        return `Name: ${name}, Age: ${age}, Role: ${role}`;
    }
    return `Name: ${name}, Role: ${role}`;
};
//4. Hàm xử lý danh sách sản phẩm (spread + rest)
//spread: bung 2 mảng thành các phần tử rời rồi đổ vào mảng mới, không sửa mảng gốc
const mergeProducts = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
const printProducts = (...products) => {
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product}`);
    });
};
//chạy thử
console.log("--- Bài 1 ---");
console.log(averageScore(8, 9, 10));
console.log(averageScore(5, 6, 7, 8));
console.log("--- Bài 2 ---");
console.log(checkNumber(4));
console.log(checkNumber(7));
console.log("--- Bài 3 ---");
console.log(createUser("Hòa"));
console.log(createUser("Nam", 25, "admin"));
console.log("--- Bài 4 ---");
const a = ["iPhone", "Samsung"];
const b = ["Xiaomi", "Oppo"];
const all = mergeProducts(a, b);
console.log(all);
printProducts(...all);
