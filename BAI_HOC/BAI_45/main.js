// replace
let s1 = "học, học nữa, học mãi";
console.log(s1.replace("học", "ngủ"));

// regular expression
console.log(s1.replace(/học/g, "ngủ"));

// repeat

let s2 = "hello, ";
let s3 = s2.repeat(3);
console.log(s3);
