// setTimeout vs arrow function
// let helloArrow = () => {
//   console.log("hello");
// };

// helloArrow();
// setTimeout(helloArrow, 3000);

// setTimeout vs function declaration
// function xinChao() {
//   console.log("hello function declaration ");
// }
// setTimeout(xinChao, 3000);

// setTimeout vs function expression
// let hi = function () {
//   console.log("hello function expression");
// };

// setTimeout(hi, 3000);

//2. truyền trực tiếp function vào setTimeout

// setTimeout vs function declaration
// setTimeout(function xinChao() {
//   console.log("hello function declaration ");
// }, 3000);

// setTimeout vs function expression
// setTimeout(function () {
//   console.log("hello function expression");
// }, 3000);

// setTimeout vs arrow function
// setTimeout(() => {
//   console.log("hello arrow");
// }, 3000);

//3. setTimeout vs tham số
// setTimeout vs arrow function

let helloArrow2 = (name) => {
  console.log("hello " + name);
};
// setTimeout(helloArrow2, 3000, "Nhu");

// 4. hủy thực hiện hàm
//step 1 : gán setTimeout vào 1 biến để lưu giá trị
let timeOut = setTimeout(helloArrow2, 3000, "Nhu");
console.log(timeOut);
// dùng clearTimeout để hủy thực hiện hàm
// clearTimeout(timeOut);
