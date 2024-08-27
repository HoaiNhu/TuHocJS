//function
//khai báo hàm
function xinChao() {
  console.log("Hello world");
}

// gọi hàm
xinChao();

// khai báo hàm vs tham số
// let inputName = prompt("Nhập tên");

function xinChao2(name) {
  console.log(` Chào ${name} đến vs động`);
}

// xinChao2(inputName);
xinChao2("Ko muốn dốt");

// ví dụ tính tổng 2 số
function tong(a, b) {
  return a + b;
}

console.log(tong(4, 2));
// gán biến cho hàm
let diemToan = 8;
let diemVan = 9;
let tongDiem = tong(diemToan, diemVan);
console.log(tongDiem);

// truyền giá trị mặc định cho paramaters
console.log(tong(10));
function hieu(a = 0, b = 0) {
  return a - b;
}
console.log(hieu(5));
