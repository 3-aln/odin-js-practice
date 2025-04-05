// https://javascript.info/function-basics#rewrite-the-function-using-or

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

// Rewrite without if, in a single line:

// 1. Using question mark operator:
function checkAge1(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

// 2. Using OR ||
function checkAge2(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

// Testing
// console.log(checkAge(16));
// console.log(checkAge1(19));
// console.log(checkAge2(18));


// https://javascript.info/function-basics#function-min-a-b
function min(a, b) {
  return (a < b) ? a : b;
}

// Testing
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));


// https://javascript.info/function-basics#function-pow-x-n

// Skip for now; loops covered later.
