let whosThere = prompt("Who's there?");
console.log(whosThere);

if (whosThere) {
    if (whosThere.toLowerCase() == "admin") {
        let password = prompt("Password?");
        console.log(password);

        if (password) {
            if (password == "TheMaster") {
                console.log("Welcome!");
            } else {
                console.log("Wrong password");
            }
        } else {
            console.log("Cancelled");
        }
        
    } else {
        console.log("I don't know you");
    }
} else {
    console.log("Cancelled");
}
