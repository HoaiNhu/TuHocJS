/*
cắt chuỗi gồm chữ và số thành 2 chuỗi chứ và số riêng biệt
*/

function separate(inputString) {
  let letters = "";
  let numbers = "";

  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (isNaN(char)) {
      // nếu char ko phải số thì + vào letters
      letters += char;
    } else {
      //nối vào numbers
      numbers += char;
    }
  }

  return { letters, numbers };
}

let inputString = prompt("Nhập chuỗi đi");
let kq = separate(inputString);

alert(`Chuooix sau khi đã tách ${kq.letters} và ${kq.numbers}`);
