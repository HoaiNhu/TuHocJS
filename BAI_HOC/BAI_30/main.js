// tình tổng chẵn, nhập số lẻ thì thoát chương trình luôn

let n = Number(prompt("Nhập vào 1 số chẵn"));
let sum = 0;
for (i = 0; i <= n; i += 2) {
  if (n % 2 !== 0 || !Number.isInteger(n)) {
    alert("Đéo tính tổng số lẻ, bye bye");
    break;
  } else {
    sum += i;
  }
}
console.log("Tổng số chẵn 0 đến " + n + " là " + sum);
