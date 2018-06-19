function checkSum(nestedArray) {
  let sum = 0;
  const sorted = nestedArray.map(array => array.sort((a, b) => b - a));
  sorted.forEach((array) => {
    sum += (array[0] - array[array.length - 1])
  });
  return sum;
}
checkSum([
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
])
