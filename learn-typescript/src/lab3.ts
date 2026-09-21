//Lab 3
//1. Hàm tính điểm trung bình (arrow function + rest parameter)
//rest parameter: gom các đối số rời rạc thành một mảng, phải đứng cuối danh sách tham số
const averageScore = (...scores: number[]): number => {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
};

//2. Định nghĩa kiểu hàm kiểm tra số chẵn lẻ
//CheckNumber chỉ mô tả hình dạng của hàm: nhận 1 number, trả về "even" hoặc "odd"
type CheckNumber = (n: number) => "even" | "odd";

const checkNumber: CheckNumber = (n) => {
    return n % 2 === 0 ? "even" : "odd";
};

//3. Hàm tạo thông tin người dùng (default + optional parameter)
//age? là tùy chọn, role có giá trị mặc định nên không truyền vẫn có "user"
const createUser = (name: string, age?: number, role: string = "user"): string => {
    if (age !== undefined) {
        return `Name: ${name}, Age: ${age}, Role: ${role}`;
    }
    return `Name: ${name}, Role: ${role}`;
};

//4. Hàm xử lý danh sách sản phẩm (spread + rest)
//spread: bung 2 mảng thành các phần tử rời rồi đổ vào mảng mới, không sửa mảng gốc
const mergeProducts = (arr1: string[], arr2: string[]): string[] => {
    return [...arr1, ...arr2];
};

const printProducts = (...products: string[]): void => {
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
const a: string[] = ["iPhone", "Samsung"];
const b: string[] = ["Xiaomi", "Oppo"];
const all = mergeProducts(a, b);
console.log(all);
printProducts(...all);
