// indexOf
let s1 = "abcdef abcdef";
let s2 = s1.indexOf("c");
console.log(s2);
// tìm c từ vị trí 3
let s3 = s1.indexOf("j", 3);
console.log(s3);

// lastIndexOf
//tìm chữ "c" từ cuối chuỗi
let s4 = s1.lastIndexOf("c");
console.log(s4);

// tìm vs endIndex
console.log(s1.lastIndexOf("a", 7)); //0 --> 7 = 7
console.log(s1.lastIndexOf("a", 6)); //0 --> 6 = 0

// include
console.log(s1.includes("a")); //true
// tìm a từ index 8
console.log(s1.includes("a", 8)); //fasle
console.log(s1.includes("l")); //false
