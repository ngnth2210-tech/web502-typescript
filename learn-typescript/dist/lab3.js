"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Lab 3
//1. Hàm tính điểm trung bình
const averageScore = (...scores) => {
    let total = 0;
    for (const score of scores) {
        total = total + score;
    }
    return total / scores.length;
};
const checkNumber = (n) => {
    if (n % 2 === 0) {
        return "even";
    }
    return "odd";
};
//3. Hàm tạo thông tin người dùng
const createUser = (name, age, role = "user") => {
    if (age) {
        return `Name: ${name}, Age: ${age}, Role: ${role}`;
    }
    return `Name: ${name}, Role: ${role}`;
};
//4. Gộp và in danh sách sản phẩm
const mergeProducts = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
const printProducts = (...products) => {
    products.forEach((product) => {
        console.log(product);
    });
};
console.log(averageScore(8, 9, 10), averageScore(5, 6, 7, 8));
console.log(checkNumber(4), checkNumber(7));
console.log(createUser("Huong"));
console.log(createUser("Nu", 20, "admin"));
const all = mergeProducts(["iPhone", "Samsung"], ["Xiaomi", "Oppo"]);
console.log(all);
printProducts(...all);
