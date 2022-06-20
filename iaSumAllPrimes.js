function sumPrimes(num) {
  let sum = 0;
  let counter = 0;
  let arr = [];
  for (let j = 0; j <= num; j++) {
    for (let i = 2; i < j; i++) {
      if (j % i == 0) {
        counter++;
        break;
      } 
    }
    if (counter === 0) {
      arr.push(j);
    }
    counter = 0;
  }
  sum = arr.reduce((a, b) => a + b) - 1
  console.log(sum)
  return sum;
}

sumPrimes(10);
