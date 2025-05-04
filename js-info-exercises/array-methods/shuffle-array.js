// Test code from the JS Info solution

// counts of appearances for all possible permutations
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

// Test code ends here

// shuffle(arr);
// console.log(arr);

// shuffle(arr);
// console.log(arr);

// shuffle(arr);
// console.log(arr);

function shuffle(arr) {
  random_interval = arr.length;
  for (let i = 0; i < arr.length; i++) {
    // Splice out a random element between index 0 and (random_interval - 1)
    random_index = Math.floor(Math.random() * random_interval);
    random_element = arr.splice(random_index, 1)[0];
    // Move this random element to the end of the array
    arr.push(random_element);
    // Decrease the size of the random interval
    random_interval--;
  }
}
