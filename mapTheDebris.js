function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let period;
  let newarr = [];
  arr.forEach(item => {
    period = Math.PI * 2 * Math.sqrt((item.avgAlt + earthRadius) ** 3 / GM);
    newarr.push({
      name: item.name,
      orbitalPeriod: Math.round(period)
    })
  })
  console.log(newarr)
  return newarr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
