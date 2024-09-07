// Bài tập 3: Sử dụng chương trình đếm ngược thời gian theo thứ tự giảm dần (countdown)
// Nếu thời gian đếm là bắt đầu là 45 phút, sau chạy về 0 thì thông báo hết thời gian
function countDown(minutes) {
  alert("thời gian làm bài của bạn là " + minutes + " phút");
  let seconds = minutes * 60;
  let countDownInterval = setInterval(() => {
    //thân hàm
    let minutesLeft = Math.floor(seconds / 60); //65/60 ~ 1.083 ~1p
    let secondsLeft = seconds % 60; //65 % 60 = 5
    //định dạng 0x
    let prefixSeconds = secondsLeft < 10 ? "0" : "";
    console.log(`${minutesLeft}: ${prefixSeconds}${secondsLeft}`);

    if (seconds <= 0) {
      clearInterval(countDownInterval);
      alert("Hết thời gian");
    } else {
      seconds--;
    }
  }, 1000);
}

let timeInput = Number(prompt("Nhập time lm bài"));

countDown(timeInput);
