function uniteUnique(...arr) {
  let array = [];
  array.push(...arr);
  let result = [].concat(...array);
  let uniqueArr = [...new Set(result)] 
  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
