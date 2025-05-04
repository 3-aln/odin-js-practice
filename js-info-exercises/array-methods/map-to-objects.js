let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map((user) => {
  let result = {};
  result.id = user.id;
  result.fullName = `${user.name} ${user.surname}`;
  return result;
});
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith
console.log(usersMapped);

// Another solution: you can wrap the arrow function code in parentheses
let usersMappedSolution = users.map((user) => ({
  id: user.id,
  fullName: `${user.name} ${user.surname}`
}));

console.log(usersMappedSolution);
