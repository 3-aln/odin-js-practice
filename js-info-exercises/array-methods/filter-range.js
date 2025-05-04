let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

// Return array of elements in arr that are between a and b, inclusive
function filterRange(arr, a, b) {
  return arr.filter(num => (a <= num && num <= b));
}
