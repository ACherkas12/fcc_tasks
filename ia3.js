function destroyer(arr) {
  let args = [...arguments];
  let array = args.shift();
  let resultArr = array.filter(item => !args.includes(item))
  return resultArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
