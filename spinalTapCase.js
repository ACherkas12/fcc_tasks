function spinalCase(str) {
  let arr = [...str.toLowerCase()];
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (str[i] === arr[i]) {
      if (arr[i].match(/[a-z]/)) {
        newarr.push(arr[i])
      } else {
        newarr.push('-')
      }
    } else {
      if (i) {
        arr[i-1].match(/[a-z]/) ? newarr.push('-' + arr[i]) 
        : newarr.push(arr[i])
      } else {
        newarr.push(arr[i])
      }
    }
  }
  return newarr.join('');
}

spinalCase("This Is Spinal Tap");
