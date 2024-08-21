// các toán tử
// +=, -=, *=, /=
//++, --

let a = 99,
  b = 88,
  c = 77,
  d = 66;

a++;
b--;
++c;
--d;

//   xuất giá trị
console.log(`a = %s`, a);
console.log(`b = %s`, b);
console.log(`c = %s`, c);
console.log(`d = %s`, d);

// 2. biểu thức phúc tạp
let x = 1;
let y = 2;
let z = x++ - ++y + 1;
// step 1. ++y = 3
// step 2. x = 1, y = 3 => 1 - 3 + 1 = -1
// step 3. z = -1;
// step 4. x++ = 2;

console.log(x);
console.log(y);
console.log(z);
