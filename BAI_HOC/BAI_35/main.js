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
