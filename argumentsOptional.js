function addTogether() {
  function sum(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return undefined;
      } else {
        return a + b;
      }
}
  function addTogetherCarrying(a) {
    return (b) => {
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return undefined;
      } else {
        return a + b;
      }
    }
  }
  if (arguments.length === 1) {
    if (!Number.isInteger(...arguments)) {
      return undefined;
    }
    return addTogetherCarrying(...arguments)
  } else {
    return sum(...arguments)
  }
}

console.log(addTogether(2)(3));
