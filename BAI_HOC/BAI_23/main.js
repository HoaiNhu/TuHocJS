// switch case

let num = -3;
switch (num % 2) {
  case 0:
    console.log("Chẵn");
    break;
  case 1:
    console.log("lẻ");
    break;
  default:
    console.log("không chẵn ko lẻ");
}

let month = parseInt(prompt("Nhập tháng"));
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Tháng có 31 ngày");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Tháng có 30 ngày");
    break;
  case 2:
    console.log("Tháng có 28 or 29 ngày");
    break;
  default:
    console.log("Phải tháng đéo đâu");
}

// xuất chuỗi xuống dòng
console.log("Sông cầu nước chảy lơ thơ\n Có đôi trai gái ngồi hơ quần đùi");

console.log(`
  1234
  3993
  đạasd
  ádad
  `);

// bài tập

let choice = Number(
  prompt(`
  Chọn cách tìm kiếm
  1. tìm theo tên
  2. tìm theo tác giả
  3. tìm theo nxb
  4. tìm theo tiêu đề
  `)
);

switch (choice) {
  case 1:
    alert("Bạn đã chọn tìm theo tên");
    break;
  case 2:
    alert("Bạn đã chọn tìm theo tác giả");
    break;
  case 3:
    alert("Bạn đã chọn tìm theo nxh");
    break;
  case 4:
    alert("Bạn đã chọn tìm theo tiêu đề");
    break;
  default:
    alert("Chọn sai cách");
    break;
}
