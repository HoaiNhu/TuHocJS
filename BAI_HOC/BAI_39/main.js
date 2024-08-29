//var let const

console.log("Giá trị biến c = " + c); //undefined

//khởi tạo biến c
var c = 9;

// JS sẽ hiểu như sau:
//var c
//console...
//c= 9

// console.log("Giá trị biến c = " + d);
// let d = 9; //Cannot access 'd' before initialization

// 2. phạm vi
// var có phạm vi function scope
function exampleVar() {
  if (true) {
    var y = 10; //y trong block scope
    console.log(y + " trong block scope");
  }
  console.log(y + " trong function scope");
}

exampleVar();

// js hiểu
function exampleVar() {
  var y; //đẩy y lên function scope
  if (true) {
    y = 10;
    console.log(y + " trong block scope");
  }
  console.log(y + " trong function scope");
}

exampleVar();

// 3. let const có phạm vi block scope
function exampleLetConst() {
  if (true) {
    let x = 10;
    console.log(x + " trong block scope");
  }
  //   console.log(x + " trong function scope");// x is not defined at exampleLetConst
}

exampleLetConst();

var diemToan = 9;
//code
var diemToan = 8;

let diem = 9;
// let diem = 8;

// 4. hoisting in function

// function declaration sẽ bị hoisting
hoistedFunction();

function hoistedFunction() {
  console.log("hi");
}

// engine của trình duyệt đọc
function hoistedFunction() {
  console.log("hi");
}

hoistedFunction();

// function expression và arrow function ko bị hoisting
// unhoistedFunction(); // Cannot access 'unhoistedFunction' before initialization

let unhoistedFunction = function () {
  console.log("hi");
};

let nonhoistedFunction = () => {
  console.log("hi");
};
