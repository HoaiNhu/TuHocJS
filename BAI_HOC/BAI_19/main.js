// tình BMI

let chieuCao = Number(prompt("Nhập chiều cao (m)"));
let canNang = Number(prompt("Nhập cân nặng (kg)"));

let BMI = canNang / (chieuCao * chieuCao); // mũ : **2

if (BMI < 15) {
  console.log("Quá gầy");
} else if (BMI >= 15 && BMI < 16) {
  console.log("Gầy");
} else if (BMI >= 16 && BMI < 18.5) {
  console.log("hơi Gầy");
} else if (BMI >= 18.5 && BMI < 25) {
  console.log("bình thường");
} else if (BMI >= 25 && BMI < 30) {
  console.log("hơi mặp");
} else if (BMI >= 30 && BMI < 35) {
  console.log("Mặp");
} else if (BMI >= 35) {
  console.log("Quá mặp");
}
