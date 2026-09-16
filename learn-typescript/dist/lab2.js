"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Lab 2
//Tạo type Product có các trường theo đề
//enum là tập hợp giá trị có tên cố định, dễ đọc, hạn chế dùng chuỗi/số tùy ý
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
const listProducts = [
    { name: "Bàn phím cơ", price: 12, sale: true, rate: Rate.hight },
    { name: "Chuột không dây", price: 5, sale: false, rate: Rate.medium },
    { name: "Tai nghe", price: 8, sale: true, rate: Rate.medium },
    { name: "Lót chuột", price: 2, sale: true, rate: Rate.low },
    { name: "Webcam", price: 15, sale: false, rate: Rate.hight },
];
//console.log(listProducts);
//hiển thị danh sách sản phẩm (forEach)
function hienThi(list) {
    list.forEach((sp) => {
        const trangThai = sp.sale ? "Đang sale" : "Không sale";
        console.log(`${sp.name} | ${sp.price} | ${trangThai} | ${sp.rate}`);
    });
}
function themMoTa(list) {
    return list.map((sp) => ({
        ...sp,
        description: sp.price > 5 ? "Tốt" : "Bình thường",
    }));
}
//tính tổng giá bán sản phẩm (reduce)
function tinhTongGia(list) {
    return list.reduce((tong, sp) => tong + sp.price, 0);
}
//lọc sản phẩm đang sale và đánh giá từ Trung bình trở lên (filter)
function locSaleTuTrungBinh(list) {
    return list.filter((sp) => sp.sale && sp.rate !== Rate.low);
}
//chạy thử
hienThi(listProducts);
console.log(themMoTa(listProducts));
console.log(tinhTongGia(listProducts));
hienThi(locSaleTuTrungBinh(listProducts));
