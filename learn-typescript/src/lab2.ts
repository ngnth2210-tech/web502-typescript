//Lab 2
//Tạo type Product có các trường theo đề
//enum là tập hợp giá trị có tên cố định, dễ đọc, hạn chế dùng chuỗi/số tùy ý
enum Rate {
    low = "Thấp",
    medium = "Trung bình",
    hight = "Cao",
}

//trạng thái hàng hoá
enum Status {
    inStock = "Còn hàng",
    outOfStock = "Hết hàng",
}

type Product = {
    name: string;
    price: number;
    status: Status;
    rate: Rate;
};

const listProducts: Product[] = [
    { name: "Bàn phím cơ", price: 12, status: Status.inStock, rate: Rate.hight },
    { name: "Chuột không dây", price: 5, status: Status.outOfStock, rate: Rate.medium },
    { name: "Tai nghe", price: 8, status: Status.inStock, rate: Rate.medium },
    { name: "Lót chuột", price: 2, status: Status.inStock, rate: Rate.low },
    { name: "Webcam", price: 15, status: Status.outOfStock, rate: Rate.hight },
]
//console.log(listProducts);

//hiển thị danh sách sản phẩm (forEach)
function hienThi(list: Product[]): void {
    list.forEach((sp) => {
        console.log(`${sp.name} | ${sp.price} | ${sp.status} | ${sp.rate}`);
    });
}


//thêm key description vào mảng (map)
type ProductMoTa = Product & { description: string };

function themMoTa(list: Product[]): ProductMoTa[] {
    return list.map((sp) => ({
        ...sp,
        description: sp.price > 5 ? "Tốt" : "Bình thường",
    }));
}

//tính tổng giá bán sản phẩm (reduce)
function tinhTongGia(list: Product[]): number {
    return list.reduce((tong, sp) => tong + sp.price, 0);
}

//lọc sản phẩm còn hàng và đánh giá từ Trung bình trở lên (filter)
function locConHangTuTrungBinh(list: Product[]): Product[] {
    return list.filter((sp) => sp.status === Status.inStock && sp.rate !== Rate.low);
}



console.log("--- Danh sach san pham ---");
hienThi(listProducts);

console.log("--- Them mo ta ---");
console.log(themMoTa(listProducts));

console.log("--- Tong gia ban ---");
console.log(tinhTongGia(listProducts));

console.log("--- San pham con hang, danh gia tu Trung binh ---");
hienThi(locConHangTuTrungBinh(listProducts));
