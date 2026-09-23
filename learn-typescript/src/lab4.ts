//class: có thuộc tính, contructor, method
//Bài 1: class Student gồm id, name, phương thức display()
class Student {
    //property
    id: string;
    name: string;
    age: number;
    constructor(id: string, name: string, age: number) {
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


//Bài 2 - Interface: object gồm id, email, phone (optional)
interface User {
    id: number;
    email: string;
    phone?: string;
}

const u1: User = {
    id: 1,
    email: "huongnt@gmail.com",
};

const u2: User = {
    id: 2,
    email: "pphuongnt@gmail.com",
    phone: "0912345678",
};

console.log(u1);
console.log(u2);


//type: object
type UserInfo = {
    id: number;
    name: string;
    age: number;
};

const user: UserInfo = {
    id: 1,
    name: "huongnt",
    age: 20,
};

console.log(user);


//Bài 3 - type Product gồm id, name, price
type Product = {
    id: number;
    name: string;
    price: number;
};

const product: Product = {
    id: 1,
    name: "Bàn phím",
    price: 12,
};

console.log(product);
