//Lab 3
//1. Hàm tính điểm trung bình
const averageScore = (...scores: number[]): number => {
  let total = 0;
  for (const score of scores) {
    total = total + score;
  }
  return total / scores.length;
};

//2. Kiểu hàm kiểm tra số chẵn lẻ
type CheckNumber = (n: number) => string;

const checkNumber: CheckNumber = (n) => {
  if (n % 2 === 0) {
    return "even";
  }
  return "odd";
};

//3. Hàm tạo thông tin người dùng
const createUser = (name: string, age?: number, role: string = "user"): string => {
  if (age) {
    return `Name: ${name}, Age: ${age}, Role: ${role}`;
  }
  return `Name: ${name}, Role: ${role}`;
};

//4. Gộp và in danh sách sản phẩm
const mergeProducts = (arr1: string[], arr2: string[]): string[] => {
  return [...arr1, ...arr2];
};

const printProducts = (...products: string[]): void => {
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
