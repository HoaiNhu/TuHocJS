// 1. Math.sqrt(): căn bậc 2

let a = Math.sqrt(4);
console.log(a);

// 2. Math.pow(base, exponent): lũy thừa
let b = Math.pow(2, 3);
console.log(b);

// 3. Math. abs(): lấy trị tuyệt đối
let c = Math.abs(-10);
console.log(c);

// 4. Math.ceil(): làm tròn lên, Math.floor(): làm tròn xuống
let d = 4.01;
console.log(Math.ceil(d));
console.log(Math.floor(d));

// 5. Math.round(), từ 0.5 lm tròn thành 1
let e = Math.round(5.51);
console.log(e);

// 6. .toFixed(): làm tròn x số sau dấu .

let f = 2.12345;
let fRounded = f.toFixed(3);
console.log(fRounded);
// kiểu trả về của toFixed là string
console.log(typeof fRounded);
// ép kiểu sang number
fRounded = Number(f.toFixed(3));
console.log(fRounded + 3);

// 7. Math.min(): tìm giá trị nhỏ nhất, Mạh.max(): tìm giá trị lớn nhất
console.log(Math.min(1, 3, 4, 7));
console.log(Math.max(1, 4, 5, 8, 2));
