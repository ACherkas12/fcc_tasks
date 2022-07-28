function telephoneCheck(str) {
  let reg = /^(1\s|1|)?[- ]?[(]?[2-9][0-9]{2}[)]?[- ]?[2-9][0-9]{2}[- ]?[0-9]{4}$/im;
  let regLeftBracket = /\(/;
  let regRightBracket = /\)/;
  if (reg.test(str) && regLeftBracket.test(str) && regRightBracket.test(str) || reg.test(str) && !regLeftBracket.test(str) && !regRightBracket.test(str)) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("555-555-5555");
