/*
  Bài tập js 27:
      const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
      Đếm từ tôi trong string a trên ? 
*/

const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
const targetWord = "tôi";
let count = 0;

for (let i = 0; i < a.length; i++) {
  if (a.slice(i, i + targetWord.length) === targetWord) {
    count++;
  }
}

alert(`Số lần xuất hiện của ${targetWord} trong chuỗi ${a} là ${count}`);
