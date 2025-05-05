let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O

// console.log(strings)
// uniqueInPlace(strings);
// console.log(strings)

function unique(arr) {
  let result = [];
  arr.forEach(element => {
    if (!result.includes(element)) result.push(element);
  });
  return result;
}

// A solution I made that filters to unique items in place.
function uniqueInPlace(arr) {
  // Search through all elements in array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is found in the sub-array that precedes the 
    // current element, delete the current element and decrement search index
    if (arr.slice(0, i).includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
}
