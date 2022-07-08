function truthCheck(collection, pre) {
  let result = 1;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].hasOwnProperty(pre)) { 
      collection[i][pre] ? result*=1 : result*=0
    } else {
      result*=0
    }
  }
  let res;
  result ? res = true : res = false;
  return res;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")
