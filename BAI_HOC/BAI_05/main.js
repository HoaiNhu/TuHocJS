//các cách xuất dữ liệu vs biến trong js
let soA = 25;
let soB = 5;

// cách 1
console.log("Căn bậc 2 của " + soA + " là: " + soB);

// cách 2
console.log("Căn bậc 2 của ", soA, " là: ", soB);

// cách 3
console.log(`Căn bậc 2 của ${soA} là ${soB}`);

//Cách 4
console.log(`Căn bậc 2 của %s là %s`, soA, soB);

//luyện tập

let a = 5,
  b = 4,
  kq = a * b;

// cách 1
console.log("kết quả" + a + "nhân với " + b + " bằng " + kq);

// cách 2
console.log("kết quả ", a, " nhân với ", b, "bằng ", kq);

// cách 3
console.log(`kết quả ${a} nhân với ${b} bằng ${kq}`);

//Cách 4
console.log(`kết quả %s nhân với %s bằng %s`, a, b, kq);
