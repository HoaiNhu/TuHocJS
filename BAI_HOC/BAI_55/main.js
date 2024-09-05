// 1. new Date(year, IndexMonth, day, hours, minutes, seconds, milisecond)
let myDate1 = new Date(2024, 1, 14);
console.log(myDate1);
console.log(myDate1.toLocaleDateString()); //2/14/2024

//2. new Date(dateString)
let myDate2 = new Date("2024-09-05T10:30:45");
console.log(myDate2);
console.log(myDate2.toLocaleDateString());

//    3. sử dụng setFullYear, setMonth, setDate
let myDate3 = new Date();
myDate3.setFullYear(2024);
// myDate3.setMonth(1); //tháng 2
myDate3.setDate(9);
console.log(myDate3);

// 4. xuất theo toLocalDateString
console.log(myDate3.toLocaleDateString());
console.log(myDate3.getMonth());
// 5.xuất theo code tự code
console.log(
  ` Ngày ${myDate3.getDate()}/Tháng ${
    myDate3.getMonth() + 1
  }/Năm ${myDate3.getFullYear()}`
);

//thêm số 0 vào tháng < 10
let prefixDate = myDate3.getDate() < 10 ? "0" : "";
let prefixMonth = myDate3.getMonth() + 1 < 10 ? "0" : "";
console.log(
  ` Ngày ${prefixDate}${myDate3.getDate()}/Tháng ${prefixMonth}${
    myDate3.getMonth() + 1
  }/Năm ${myDate3.getFullYear()}`
);
