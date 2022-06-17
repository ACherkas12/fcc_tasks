function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let letter = str[0];
  let index = alphabet.indexOf(letter);
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[index+i]) {
      return alphabet[index+i];
    } 
  }
  return undefined;
}

fearNotLetter("abce");
