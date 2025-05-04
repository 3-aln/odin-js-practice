let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);

function copySorted(arr) {
  // slice() without arguments can be used to make a copy of an array
  copy = arr.slice();
  return copy.sort();
}
