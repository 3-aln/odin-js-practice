// METHOD 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!!");

// METHOD 3
const btnEventListener = document.querySelector("#btn-event-listener");
btnEventListener.addEventListener("click", () => {
  alert("Hello World!!!");
});


// Using named functions

function alertFunction() {
  alert("You did it!");
}

// METHOD 2
const anotherBtn = document.querySelector("#another-btn");
anotherBtn.onclick = alertFunction;

// METHOD 3
const finalBtn = document.querySelector("#final-btn");
finalBtn.addEventListener("click", alertFunction);

const eventObjBtn = document.querySelector("#event-obj-btn");
eventObjBtn.addEventListener("click", function (e) {
  console.log(e.target);
});

const clickBlueBtn = document.querySelector("#click-blue-btn");
clickBlueBtn.addEventListener("click", function(e) {
  e.target.style.background = "blue";
});

// Attaching listeners to groups of nodes
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll(".group");

// We use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one, we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
