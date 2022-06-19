function dropElements(arr, func) {
  let result = arr.filter(item => func(item));
  let index = arr.indexOf(result[0]);
  let newArr = arr.slice(index);
  if (!result[0]) {
    return result;
  } else {
    return newArr;
  }
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
