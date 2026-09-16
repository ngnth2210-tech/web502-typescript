//---B1
function hcn(chieuDai: number, chieuRong: number) {
    const chuVi = (chieuDai + chieuRong) * 2;
    const dienTich = chieuDai * chieuRong;
    return { chuVi: chuVi, dienTich: dienTich };
}
console.log(hcn(4, 5));

//----B2
function tinhTong(...nums: number[]) {
    let tong = 0;

    for (const n of nums) {
        tong += n;
    }
    return tong;
}

console.log(tinhTong(1, 2, 3));
console.log(tinhTong(10, 20, 30, 40, 50));

// ===== BÀI 3: đếm số lần xuất hiện của 1 ký tự trong chuỗi =====
function demKyTu(chuoi: string, kyTu: string) {
    let dem = 0;

    for (const c of chuoi) {
        if (c === kyTu) {
            dem += 1;
        }
    }
    return dem;
}

console.log(demKyTu("hello world", "l"));
console.log(demKyTu("typescript", "t"));

// ===== BÀI 4: kiểm tra số nguyên tố =====
function laSoNguyenTo(n: number): boolean {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(laSoNguyenTo(2));
console.log(laSoNguyenTo(7));
console.log(laSoNguyenTo(6));
console.log(laSoNguyenTo(1));
