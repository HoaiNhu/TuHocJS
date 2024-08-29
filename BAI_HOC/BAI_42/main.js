// slice

let s4 = "234567893456";
// cắt chuỗi
let s4Slice = s4.slice(2, s4.length); //cắt từ index 2 đến 5 - 1 = 4
console.log(s4Slice);

// let s6 = prompt("Nhập chuỗi");

// console.log("Chuối đã nhập " + s6);
// console.log(`Bạn đã nhập ${s6.length} kí tự`);
// if (s6.length > 20) {
//   console.log(`Banj đã nhập quá ${s6.length - 20} kí tự`);
//   let s7 = s6.slice(0, 20);
//   console.log("Chuối sau xử lí " + s7);
// }

// code one line
// console.log("Chuỗi sau xử lí " + prompt("Mời nhập chuỗi").slice(0, 20));

// substring
let s8 = "234567893456";
// cắt chuỗi
let s8Substring = s8.substring(2, s8.length); //cắt từ index 2 đến 5 - 1 = 4
console.log(s8Substring);

// so sánh slice và substring
let s10 = "0123456789";
console.log("Sử dụng substring");
console.log(s10.substring(1, 6)); //12345
console.log(s10.substring(6, 1)); //12345

console.log("Sử dụng slice");
console.log(s10.slice(1, 6)); //12345
console.log(s10.slice(6, 1)); //""

// với tham số âm
let s11 = "0123456789";
console.log("Sử dụng substring vs tham số âm");
console.log(s11.substring(-3, -1)); //""
// <=> s11.substring(0, 0) = ""

// TH2 substring vs số âm, end < start đảo ngc lại
console.log("Sử dụng substring vs tham số âm, end < start");
console.log(s11.substring(4, -1)); //0123
// <=> _____(4, 0) = (0, 4) = 0123

console.log("Sử dụng slice vs tham số âm");
console.log(s11.slice(-3, -1)); //78
//cắt từ -3 đến -1 - 1 = -2
