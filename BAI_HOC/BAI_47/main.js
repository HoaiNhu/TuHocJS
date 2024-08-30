// starWith
let s1 = "abcdef abcdef";
console.log(s1.startsWith("ab")); //true
console.log(s1.startsWith("b")); //false

// tìm từ index 1 có phải bắt đầu bằng chuỗi bc ko
console.log(s1.startsWith("bc", 1)); //true

// endWith
let s2 = "01234567890";
console.log(s2.endsWith("0")); //true
// endIndex = 10, kiểm tra từ 0 đến 10-1 = 9
console.log(s2.endsWith("9", 10)); //true
console.log(s2.endsWith("9", 9)); //false
console.log(s2.endsWith("78", 9)); //true

// vd: kiểm tra tập tin có đuôi mp3
let tenTapTin = "nhac.mp3";
// kiểm tra file end = mp3
if (tenTapTin.endsWith(".mp3")) {
  console.log("Tập tin là file âm thanh");
} else {
  console.log("Tập tin ko là file âm thanh");
}
