function diffArray1(arr1, arr2) {
  let difference = arr1
     .filter(num => !arr2.includes(num))
     .concat(arr2.filter(num => !arr1.includes(num)));
  return difference;
}

function diffArray2(arr1, arr2) {
  const newArr = [];
  let a = arr1.length > arr2.length ? arr1 : arr2; 
  for (let i = 0; i < a.length; i++) {
    if (!arr1.includes(arr2[i]) && !newArr.includes(arr2[i])) {
      if (arr2[i]) {
       newArr.push(arr2[i])
      }
    };
    if (!arr2.includes(arr1[i]) && !newArr.includes(arr1[i])) {
      if (arr1[i]) {
       newArr.push(arr1[i]);
      }
    }
  }
  return newArr;
}
