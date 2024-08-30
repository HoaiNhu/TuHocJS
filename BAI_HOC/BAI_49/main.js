// đếm loại kí tự
let s = prompt("Mời nhập chuỗi");
console.log(s);
let thuong = 0;
let hoa = 0;
let so = 0;
let space = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] >= "a" && s[i] <= "z") {
    thuong++;
  } else if (s[i] >= "A" && s[i] <= "Z") {
    hoa++;
  } else if (s[i] >= "0" && s[i] <= "9") {
    so++;
  } else if (s[i] === " ") {
    space++;
  }
}

console.log("Số kí tự thường = " + thuong);
console.log("Số kí tự hoa = " + hoa);
console.log("Số kí tự số = " + so);
console.log("Số kí tự khoảng trắng = " + space);
