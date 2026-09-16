//Lab 2
//Tạo type Product có các trường theo đề
//enum là tập hợp giá trị có tên cố định, dễ đọc, hạn chế dùng chuỗi/số tùy ý
enum Rate {
    low = "Thấp",
    medium = "Trung bình",
    hight = "Cao",
}

type Product = {
    name: string;
    price: number;
    sale: boolean;
    rate: Rate;
};

const listProducts: Product[] = [
    { name: "Bàn phím cơ", price: 12, sale: true, rate: Rate.hight },
    { name: "Chuột không dây", price: 5, sale: false, rate: Rate.medium },
    { name: "Tai nghe", price: 8, sale: true, rate: Rate.medium },
    { name: "Lót chuột", price: 2, sale: true, rate: Rate.low },
    { name: "Webcam", price: 15, sale: false, rate: Rate.hight },
]
//console.log(listProducts);

//hiển thị danh sách sản phẩm (forEach)
function hienThi(list: Product[]): void {
    list.forEach((sp) => {
        const trangThai = sp.sale ? "Đang sale" : "Không sale";
        console.log(`${sp.name} | ${sp.price} | ${trangThai} | ${sp.rate}`);
    });
}

//thêm key description vào mỗi phần tử (map)
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

//lọc sản phẩm đang sale và đánh giá từ Trung bình trở lên (filter)
function locSaleTuTrungBinh(list: Product[]): Product[] {
    return list.filter((sp) => sp.sale && sp.rate !== Rate.low);
}

//chạy thử
hienThi(listProducts);
console.log(themMoTa(listProducts));
console.log(tinhTongGia(listProducts));
hienThi(locSaleTuTrungBinh(listProducts));
