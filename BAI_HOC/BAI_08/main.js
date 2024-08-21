// ép kiểu dữ liệu
//xuất thông báo nhập dữ liệu
let numberA = prompt("Nhập số A mau");

console.log(typeof numberA);

let numberB = 5;

console.log(typeof numberB);

let kq = numberA + numberB;
console.log(kq);
console.log(typeof kq);

// các phép toán khác
console.log(`a - b = %s`, numberA - numberB);
console.log(`a * b = %s`, numberA * numberB);
console.log(`a % b = %s`, numberA % numberB);

// ép kdl khi dùng hàm prompt
// let numberC = parseInt(prompt("Nhập số C mau"));
// let numberC = parseFloat(prompt("Nhập số C mau"));

// console.log(numberC);
// console.log(typeof numberC);

// đơn giản thì ép hết sang kiểu Number()
let numberC = Number(prompt("Nhập số C mau"));
console.log(numberC);
console.log(typeof numberC);
console.log(numberB + numberC);
