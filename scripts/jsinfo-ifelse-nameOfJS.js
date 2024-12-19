let response = prompt('What is the "official" name of JavaScript?', '');
console.log(`The user entered: ${response}`);

if (response.toLowerCase() === "ecmascript") {
    alert("Right!")
} else {
    alert(`You don't know? "ECMASCript!"`)
}
