// số hoàn thiện

// kiểm tra số hoàn hảo
// let n = 6;

//tìm số hoàn hảo trong khoảng 1 -> 1000
for (let n = 1; n < 1000; n++) {
  let sum = 0;
  // kiểm tra tổng ước thực bằng bao nhiu
  for (let i = 1; i < n; i++) {
    // console.log(i);
    if (n % i === 0) {
      sum += i;
    }
  }

  // so sánh
  if (sum === n) {
    console.log(n + " là số hoàn hảo");
  }
}
