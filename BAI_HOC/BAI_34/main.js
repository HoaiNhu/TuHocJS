// khai báo hàm
//1. function declaration

// function tenHam(thamSo){
//   //body
//   //return
// }

function tong(a = 0, b = 0) {
  return a + b;
}

console.log(tong(2, 1));

//2. function expression

//let tenBien = function(thamSo){ //body}

let hieu = function (a = 0, b = 0) {
  return a - b;
};

console.log(hieu(4, 8));

// 3. arrow funtion: hàm mũi tên

//let tenBien = (thamSo) => { //body}

let tich = (a = 0, b = 0) => a * b;
// => { return a * b }

console.log(tich(4, 8));

// thân hàm phức tạp, thêm khối block {}
let multiplyAdd = (a, b) => {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};

console.log(multiplyAdd(5, 6));

// 4. function calling other functions

// hàm tính tong
function cong(a, b) {
  return a + b;
}

// hàm tính tích
function nhan(a, b) {
  return a * b;
}

// hàm tính tổng tích
function congNhan(num1, num2, num3) {
  // num1 + num2
  let sum = cong(num1, num2);
  //sum * num3
  let product = nhan(sum, num3);

  return product;
}

console.log(congNhan(3, 7, 6));
