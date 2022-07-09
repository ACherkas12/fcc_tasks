function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  const keyArr = Object.keys(source);
  let j;
  collection.forEach(item => {
    for (let i = 0; i < keyArr.length; i++) {
      j = keyArr[i];
      if (!(item[j] === source[j])) {
        return;
      }
    }
    arr.push(item)
  })

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
