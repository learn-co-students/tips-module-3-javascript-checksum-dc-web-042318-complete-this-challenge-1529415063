var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]
function difference(array) {
	// debugger
	return (Math.max(...array) - Math.min(...array))
}

function checksum(array) {
	// debugger
	let checksum = 0
	array.forEach(subArray=>checksum+=difference(subArray))
	return checksum
}

console.log(checksum(data))