//1. khai báo setInterval
//setInterval vs function declaration
// function showNotification() {
//   console.log("Bạn có xxx tin nhắn chưa đọc");
// }
// setInterval(showNotification, 2000);

//ví dụ 2:
function updateTime() {
  let currentTime = new Date();
  console.log(currentTime);
}
// setInterval(updateTime, 1000);

let counter = 0;
//1. function declaration
// function count() {
//   console.log(++counter);
// }

//2.function expression
// let count = function () {
//   console.log(counter++);
// };

//3. arrow function
// let count = () => {
//   console.log(counter++);
// };

// setInterval(count, 1000);

// 4. hủy lặp
let count = () => {
  console.log(counter++);
  if (counter === 5) {
    clearInterval(stopInterval);
  }
};

let stopInterval = setInterval(count, 1000);
