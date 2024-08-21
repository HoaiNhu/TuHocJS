// toán tử logic

let i = 7;

console.log(i < 10 && i > 0);
console.log(i < 10 || i > 0);
console.log(!(i < 10 && i > 0));

// bài tập tính chu vi diện tích hình tròn

let PI = Math.PI;

let r = prompt("Nhập bán kính hình tròn");

let chuVi = 2 * PI * r;
let dienTich = PI * r * r;

console.log(` Diện tích = ${dienTich.toFixed(2)}`);
console.log(` Chu vi = ${chuVi.toFixed(2)}`);
