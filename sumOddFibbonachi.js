function sumFibs(num) {
  let firstValue = 0;
  let secondValue = 1;
  let sum = 0;
  let currentValue;  
  for (let i = 0; i <= num; i++){
    currentValue = firstValue + secondValue;
    firstValue = secondValue;
    secondValue = currentValue;
    if (currentValue % 2 !==0 && currentValue <= num) {
      sum += currentValue
    }
  }
  console.log(sum)
  return sum + 1;
  }
sumFibs(4);

function sumFibs(num) {
  function fib(first, last) {
    return first + last;
  }
  let firstValue = 0;
  let secondValue = 1;
  let sum = 1;
  let newCurrent;
  for (let i = 0; i <= num; i++) {
    newCurrent = fib(firstValue, secondValue)
    firstValue = secondValue;
    secondValue = newCurrent;
    if (newCurrent % 2 && newCurrent <= num)
      sum += newCurrent;
  }
  console.log(sum)
  return sum;
}
