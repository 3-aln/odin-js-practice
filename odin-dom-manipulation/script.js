const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// Add <p> with red text that says "Hey I'm red!"
const redPara = document.createElement("p");
redPara.style.color = "red";
redPara.textContent = "Hey I'm red!";

container.appendChild(redPara);

// Add an <h3> with blue text that says "I'm a blue h3!"
const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue H3!";

container.appendChild(blueH3);
