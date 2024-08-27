//giải ptb2
// 1. function declaration
function ptb2_1(a, b, c) {
  let delta = b * b - 4 * a * c;
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("pt có 2 nghiệm x1 = " + x1 + " và x2 = " + x2);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log("Pt có nghiệm kép x1 = x2 = " + x1);
  } else {
    console.log("pt vô nghiệm");
  }
}

// gọi hàm
ptb2_1(1, 2, -3);
ptb2_1(1, 2, 1);
ptb2_1(1, 1, 1);

// 2. function expression
let ptb2_2 = function (a, b, c) {
  let delta = b * b - 4 * a * c;
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("pt có 2 nghiệm x1 = " + x1 + " và x2 = " + x2);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log("Pt có nghiệm kép x1 = x2 = " + x1);
  } else {
    console.log("pt vô nghiệm");
  }
};

ptb2_2(1, 2, -3);
ptb2_2(1, 2, 1);
ptb2_2(1, 1, 1);

// 3. arrow function

let ptb2_3 = (a, b, c) => {
  let delta = b * b - 4 * a * c;
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("pt có 2 nghiệm x1 = " + x1 + " và x2 = " + x2);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log("Pt có nghiệm kép x1 = x2 = " + x1);
  } else {
    console.log("pt vô nghiệm");
  }
};

ptb2_3(1, 2, -3);
ptb2_3(1, 2, 1);
ptb2_3(1, 1, 1);
