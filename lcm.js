function smallestCommons(arr) {
  let maxNumber = Math.max(arr[0],arr[1]);
  let minNumber = Math.min(arr[0],arr[1]);
  let smallestCM = maxNumber;
  while (true) {
    let isSmallestCM = true;
    for (let i = minNumber; i<= maxNumber; i++) {
      if (smallestCM % i) {
        isSmallestCM = false;
        break;
      }
    }
    if (isSmallestCM) {
      return smallestCM;
    } else {
      smallestCM++;
    }
  }
}

smallestCommons([1, 5]);
