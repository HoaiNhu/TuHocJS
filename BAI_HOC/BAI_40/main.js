// tính n!

function giaiThua(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * giaiThua(n - 1);
  }
}

let kq = giaiThua(5);
console.log(kq);

// tính dãy fibonacci

function f(n) {
  if (n <= 2) return 1;
  else {
    return f(n - 1) + f(n - 2);
  }
}

let kq2 = f(10);
console.log(kq2);
