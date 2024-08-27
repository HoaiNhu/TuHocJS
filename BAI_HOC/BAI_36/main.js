// tính n!

function tinhGiaiThuaFor(n) {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  return gt;
}

function tinhGiaiThuaWhile(n) {
  let gt = 1;
  let i = 1;
  while (i <= n) {
    gt *= i;
    i++;
  }
  return gt;
}

// nhập n
let n = Number(prompt("Nhập n"));
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Nhập lại n"));
}

let giaiThua = tinhGiaiThuaFor(n);
console.log(giaiThua);

let giaiThua2 = tinhGiaiThuaWhile(n);
console.log(giaiThua2);
