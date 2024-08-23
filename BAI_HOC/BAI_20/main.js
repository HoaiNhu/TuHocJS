//kiểm tra năm nhuận

let nam = Number(prompt("Nhập năm"));

if (!isNaN(nam) && nam > 0) {
  if (nam % 400 === 0 || (nam % 4 === 0 && nam % 100 !== 0)) {
    console.log("Năm nhuận");
  } else {
    console.log("Năm ko nhuận");
  }
} else {
  console.log("Tháng không hợp lệ");
}
