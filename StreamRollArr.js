function steamrollArray(arr) {
  var newarr = [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
        newarr = newarr.concat(steamrollArray(arr[i]));
    } else {
        newarr.push(arr[i]);
    }
  }
  return newarr;
}

steamrollArray([1, [2], [3, [[4]]]]);

function streamroll(arr, res) {
    debugger;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            streamroll([...arr[i]], res)
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}
a = [1, [2], [3, [[4]]]];
r = [];
streamroll(a, r)
