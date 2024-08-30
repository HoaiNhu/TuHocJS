/* Bài tập js 25:
Viết chương trình kiểm tra tính hợp lệ của mật khẩu:
* mật khẩu hợp lệ khi có ít nhất 6 ký tự
* chứa ít nhất 1 chữ cái viết hoa
* chứa ít nhất 1 chữ cái viết thường
* chứa ít nhất 1 số

cho người dùng nhập vào một khảo sát đăng nhập / so sánh, ví dụ đúng mật khẩu là Abc123 và sai là abc123.
*/

// tạo hàm kiểm tra tính hợp lệ của mật khẩu
function isPasswordValid(password) {
  if (password.length < 6) {
    return false;
  }

  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasDigit = false;

  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "a" && password[i] <= "z") {
      hasLowerCase = true;
    } else if (password[i] >= "A" && password[i] <= "Z") {
      hasUpperCase = true;
    } else if (password[i] >= "0" && password[i] <= "9") {
      hasDigit = true;
    }
  }

  // if (hasUpperCase === true && hasDigit === true && hasLowerCase === true) {
  //   return true;
  // }

  return hasDigit && hasLowerCase && hasUpperCase;
}

//set mật khẩu
function setPassword() {
  let password = prompt("Mời thiết lập mật khẩu");
  if (isPasswordValid(password)) {
    alert("Đặt mật khẩu thành công! Mật khẩu là: " + password);
    return password;
  } else {
    alert(` Mật khẩu ko hợp lệ: 
      * mật khẩu hợp lệ khi có ít nhất 6 ký tự
      * chứa ít nhất 1 chữ cái viết hoa
      * chứa ít nhất 1 chữ cái viết thường
      * chứa ít nhất 1 số
    `);
    // gọi lại hàm setPassword
    setPassword();
  }
}

// gọi hàm setPassword và gán pass vào biến nếu thành công
let passwordOK = setPassword();

// viết chương trình đăng nhập
let countLogin = 0;
while (true) {
  let passwordLogin = prompt("Mời nhập mật khẩu đăng nhập");
  if (passwordLogin === passwordOK) {
    alert("Đăng nhập thành công");
  } else {
    countLogin++;
    if (countLogin < 5) {
      alert("Bạn đã nhập sai pass, số lần thử: " + countLogin + "/5");
    } else {
      alert("bạn đã thử 5 lần, tài khoản của bạn đã bị khóa");
      break;
    }
  }
}
