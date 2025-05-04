console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// Change dash
function camelize(str) {
  // Create array of strings, split by '-'
  splitStrs = str.split("-");

  // Remove first item unchanged and store it
  first = splitStrs.shift();

  // Capitalize the remaining strings in the array
  upperStrs = splitStrs.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });

  return first + upperStrs.join("");
}

// Website solution
function camelizeSolution(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}
