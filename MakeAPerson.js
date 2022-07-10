const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstProp = firstAndLast.split(" ")[0];
  let lastProp = firstAndLast.split(" ")[1];
  this.getFullName = function() {
    return firstProp + " " + lastProp;
  };
  this.getFirstName = function() {
    return firstProp;
  };
  this.getLastName = function() {
    return lastProp;
  };
  this.setFullName = function(firstAndLast) {
    firstProp = firstAndLast.split(" ")[0];
    lastProp = firstAndLast.split(" ")[1];
  }
  this.setFirstName = function(first) {
    firstProp = first;
  }
  this.setLastName = function(last) {
    lastProp = last;
  }
  //return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.setFirstName("Haskell")
console.log(bob.getFullName());
