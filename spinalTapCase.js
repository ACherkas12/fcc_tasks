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

function spinalCase(str) {
  const re = /[^A-Za-z]/;
  let newarr = [];
  let word = [];
  let arrWithCase = [...str.split(re)];
  let arr = [...str.toLowerCase().split(re)];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].split(1) != arrWithCase[i].split(1)) {
      for (let j = 0; j < arr[i].length; j++) {
        arr[j] == arrWithCase[j] && j ? word.push(arr[j]) 
        : word.push()
      }
    }
    newarr.push(arr[i]);
    if (i < arr.length - 1) {
      newarr.push('-')
    }
  }
  console.log(newarr)
