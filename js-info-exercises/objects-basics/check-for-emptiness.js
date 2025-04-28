let schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

function isEmpty(obj) {
  // If there is at least one property, this loop will execute and return false.
  for (let key in obj) {
    return false;
  }
  // If there are no keys, the loop will not execute.
  return true;
}
