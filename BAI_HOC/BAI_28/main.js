// continue, break

let n = 0;
while (n < 100) {
  n++;
  if (n === 4) {
    break;
  }
  console.log(n);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
