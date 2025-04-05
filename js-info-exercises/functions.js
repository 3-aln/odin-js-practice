// https://javascript.info/function-basics#tasks

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

// Rewrite without if, in a single line.

// 1. Using question mark operator:

// 2. Using OR ||

// Testing
console.log(checkAge(20));
