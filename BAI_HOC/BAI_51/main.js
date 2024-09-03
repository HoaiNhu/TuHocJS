/* 
/*
Bài tập js 26.
Viết chương trình chuyển đổi nhận sáng mã hóa theo bảng :
const a = 'abcdefghijklmnopqrstuvwxyz';
const b = 'xwvutsrqponmlkjihgfedcbazy';
*/

function encryptMessage(message) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  const b = "zxcvbnmasdfghjklqwertyuiop";
  let result = ""; //nhận kq trả về khi mã hóa thành công

  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase(); //chuyển đổi sang chữ thường để phù hợp vs bản mã

    //kiểm tra xem kí tự nhập vào cso trong bản mã
    if (a.includes(char)) {
      // thực hiện chuyển đổi
      //kiểm tra vị trí index của kí tự nhập vào trong a
      let index = a.indexOf(char);
      //lấy giá trị index và dóng sang chuỗi b và lấy kí tự tương ứng trên b
      result += b[index];
    } else {
      // nếu ko có trong bản mã thì giữ nguyên kí tự và cộng vào result
      result += char;
    }
  }

  return result;
}

let messageInput = prompt("Nhập tin nhắn cần mã hóa");
let kq = encryptMessage(messageInput);
alert(`Tin nhắn ${messageInput} dc mã hóa thành ${kq}`);
