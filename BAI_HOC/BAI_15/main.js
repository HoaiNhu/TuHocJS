// Math.random()
// random trong (0 -> 1)
let letRandom = Math.random();
console.log("Số ngấu nhiên từ 0 đến sát 1 là %s", letRandom);

// 2. random số > 1
let letRandom1 = Math.random() * 10;
console.log("Số ngấu nhiên từ 0 đến sát 10 là %s", letRandom1);

//random số nguyên
let letRandom2 = Math.floor(Math.random() * 10);
let letRandom3 = parseInt(Math.random() * 10);
console.log("Số ngấu nhiên từ 0 đến sát 10 là %s", letRandom2);
console.log("Số ngấu nhiên từ 0 đến sát 10 là %s", letRandom3);

// chạy từ 10 đến 30
let letRandom4 = parseInt(Math.random() * 21) + 10;
