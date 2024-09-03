//Tạo đối tượng date

let currentDate = new Date();
console.log(typeof currentDate);
console.log(currentDate);

// lấy năm tháng này giờ phút giây
let nam = currentDate.getFullYear(); //lấy năm
let thang = currentDate.getMonth() + 1; //tháng bắt đầu từ 0
let ngay = currentDate.getDate();
let gio = currentDate.getHours();
let phut = currentDate.getMinutes();
let giay = currentDate.getSeconds();

console.log("Năm " + nam);
console.log("tháng " + thang);
console.log("ngày " + ngay);
console.log("giờ " + gio);
console.log("phút " + phut);
console.log("giây " + giay);

// timestamp
let timestamp1 = new Date(0);
console.log(timestamp1);

//sử dụng getTime để lấy timestamp hiện tại
let currentTimeStamp = new Date().getTime();
console.log(currentTimeStamp);
