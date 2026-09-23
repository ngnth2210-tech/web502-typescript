"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//class: có thuộc tính, contructor, method
//Bài 1: class Student gồm id, name, phương thức display()
class Student {
    //property
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    //method
    showStudent() {
        console.log(this.id);
    }
    display() {
        console.log(this.id, this.name);
    }
}
const sv1 = new Student("ph3333", "huongnt", 20);
const sv2 = new Student("ph4444", "pphuongnt", 21);
sv1.showStudent();
sv1.display();
sv2.display();
const u1 = {
    id: 1,
    email: "huongnt@gmail.com",
};
const u2 = {
    id: 2,
    email: "pphuongnt@gmail.com",
    phone: "0912345678",
};
console.log(u1);
console.log(u2);
const user = {
    id: 1,
    name: "huongnt",
    age: 20,
};
console.log(user);
const product = {
    id: 1,
    name: "Bàn phím",
    price: 12,
};
console.log(product);
