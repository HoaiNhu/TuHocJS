// hàm number(value): chuyển value sang số
//nếu ko chuyển dc trả về NaN

let str = "123a";
console.log(typeof str);

let num = Number(str);
console.log(num);
console.log(typeof num);

// let so = Number(prompt("Nhập số lẹ"));
// console.log(so);

// isNaN(value): kiểm tra value ko phải định dạng số (NaN), hoặc ko thể chuyển đổi sang số
// --> true khi giá trị sau chuyển đổi ko phải số
// --> false: giá trị sau chuyển đổi là số

let a = "13a";
console.log(isNaN(a));

let b = Number(true);
console.log(b);
console.log(typeof b);
console.log(isNaN(b));

let c = Number(null);
console.log(c);
console.log(typeof c);
console.log(isNaN(c));

console.log(Number(""));
console.log(Number(" "));

// Number.isNaN: chỉ trả về true nếu truyền vào NaN
console.log(Number.isNaN("fpp" / "boo"));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(0 / 0));
console.log(Number.isNaN(Number.NaN));
console.log(Number.isNaN({}));


