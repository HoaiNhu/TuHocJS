// truthy và falsy
// ép ngc số sang chuỗi
let a = 123;
console.log(typeof a);

let b = String(a);
console.log(typeof b);
console.log(`Gias trị của ${b}`);

// 8 giá trị falsy
// false, 0, 0n, null, "", undefined, NaN, -0

let c = Boolean(false);
console.log(c);
console.log(typeof c);

// kiểm tra biến dc gán giá trị hay indefined
let salary;
console.log(salary);

if (salary === true) { //ép kiểu salary về boolen, do salary dang undefined nên === false
  console.log("Salary is defined");
} else {
  console.log("Salary is undefined");
}
