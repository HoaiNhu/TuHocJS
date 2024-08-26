// tính n!

// kiểm tra số nguyên
// let a = 8.1;
// if (a % 1 === 0) {
//   console.log(a + " là số nguyên");
// }
// console.log(a + " ko là số nguyên");

// bắt ng dùng nhập số nguyên
let n = Number(prompt("Nhập vào 1 số nguyên"));
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Sai gòi nhập lại n đi"));
}

//tính n! dùng for
// let gt = 1;
// for (i = 1; i <= n; i++) {
//   console.log(i);
//   gt *= i;
// }
// console.log(n + "! = " + gt);

// dùng while
let gt = 1;
let i = 1;
while (i <= n) {
  gt *= i;
  i++;
}
console.log(n + "! = " + gt);
