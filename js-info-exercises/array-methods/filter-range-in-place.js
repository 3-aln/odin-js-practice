let arr = [5, 3, 8, 1];

console.log(arr);

// filterRangeInPlace(arr, 1, 4);
filterRangeInPlaceSolution(arr, 1, 4);

console.log(arr);

// Filter arr in place to elements that are between a and b, inclusive
function filterRangeInPlace(arr, a, b) {
  filtered = arr.filter(num => (a <= num && num <= b));
  arr.splice(0, arr.length);
  filtered.forEach(
    (item) => arr.push(item)
  );
}

// Better solution
function filterRangeInPlaceSolution(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    // Remove elements outside interval
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
