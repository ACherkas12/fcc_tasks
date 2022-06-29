function convertHTML(str) {
  let map = new Map([['&', '&amp;'], ['<', '&lt;'], ['>', '&gt;'], ['"', '&quot;'], ["'", '&apos;']]);
  let newstr = '';
  for (let i = 0; i < str.length; i++) {
    let iFromMap = map.get(str[i]);
    if (iFromMap) {
      newstr += iFromMap;
    } else {
      newstr += str[i];
    }
  }
  return newstr;
};

console.log(convertHTML2("Dolce & Gabbana"));

function convertHTML(str) {
  let map = new Map([['&', '&amp;'], ['<', '&lt;'], ['>', '&gt;'], ['"', '&quot;'], ["'", '&apos;']]);
  let newstr = '';
  for (let i = 0; i < str.length; i++) {
    map.has(str[i]) ? newstr += map.get(str[i]) : newstr += str[i];
    }
  return newstr;
};

console.log(convertHTML("Dolce & Gabbana"));
