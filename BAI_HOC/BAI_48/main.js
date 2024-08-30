// split
let student = "Hoa,Lan,Huệ,Trung";
let arr = student.split(",");
console.log(arr);

// giới hạn phần tử của mảng
let arr2 = student.split(",", 3);
console.log(arr2);

// nếu nhập "" thì sẽ tách từng kí tự trong mảng

let s = "abcdef 1234";
console.log(s.split(""));
