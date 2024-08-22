// if..else
// xuất thông báo cho ng dùng nhập điểm
let dtb = parseFloat(prompt("Nhập điểm m"));

// điều kiện
if (dtb <= 10 && dtb >= 8) {
  console.log("Giỏi");
} else if (dtb >= 6.5 && dtb < 8) {
  console.log("khá");
} else if (dtb >= 5 && dtb < 6.5) {
  console.log("trung bình");
} else if (dtb >= 0 && dtb < 5) {
  console.log("rớt");
} else {
  console.log("Nhập tào lao");
}

// bài tập
