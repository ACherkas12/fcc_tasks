function pairElement(str) {
  debugger;
  let commonArr = [];
  let a;
  for (let i = 0; i < str.length; i++) {
    switch(str[i]) {
      case "G" : a = `${str[i]} C`;
      break;
      case "C" : a = `${str[i]} G`;
      break;
      case "A" : a = `${str[i]} T`;
      break;
      case "T" : a = `${str[i]} A`;
      break;
    }
    commonArr.push(a.split(" "));
  }
  return commonArr;
}

pairElement("GCG");

function pairElement2(str) {
  let startObj = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'T'
  }
  let arr = [];
  for (const item of str) {
    arr.push([item, startObj[item]]);
  }
  return arr;
}

pairElement2("GCG");
