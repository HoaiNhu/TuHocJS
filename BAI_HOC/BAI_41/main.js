//1. xuất chuỗi
console.log("xin chào, 123, abc...%^$");
console.log("xin chào, 123, abc...%^$");

// 2. khởi tạo chuỗi
let s1 = `aajhdajshdasakasj
ádhjashgajas
`;
console.log(s1);

let s2 = "asdfghjkgjadjsa\n fgsahjdkf";
console.log(s2);

console.log(typeof s1);
console.log(typeof s2);

// 3. index chuỗi, bắt đầu từ 0

let ten = "Nhu";
console.log(ten[0]);

//4. string length
let s3 = "abcdef";

// kiểm tra chiều dài chuỗi s3
console.log(s3.length);

let message = prompt("Nhập một vài kí tự tối đa 140 kí tự");

if (message.length <= 140) {
  alert(
    "bạn đã nhập " + message.length + ", bạn còn lại " + (140 - message.length)
  );
} else {
  alert("bạn đã nhập quá  " + (message.length - 140) + " kí tự");
}
