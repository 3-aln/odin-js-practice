let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
console.log(getAverageAgeSolution(arr)); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
  sum = 0;
  arr.forEach(element => (sum += element.age));
  return sum / arr.length;
}

// Solution uses reduce
function getAverageAgeSolution(users) {
  return arr.reduce((sum, user) => sum + user.age, 0) / users.length;
}
