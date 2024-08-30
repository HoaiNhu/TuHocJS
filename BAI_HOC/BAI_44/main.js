// concat(): let newStr = s1.concat(s2, s3, ... sN): nối s2, s3,... vào chuỗi s1

let s1 = "aBc";
let s2 = "Def";
let s3 = "ghI";

let newStr = s1.concat(" ", s2, " ", s3);
console.log(newStr);

//- toUpperCase(): chuyển toàn bộ chuỗi sang in hoa
console.log(newStr.toUpperCase());

//- toLowerCase(): chuyển toàn bộ chuỗi sang in Thường
console.log(newStr.toLowerCase());

//- charAt(index): trả về chuỗi nằm ở vị trí index dc truyền vào
let s4 = newStr.charAt(4);
console.log(s4);
