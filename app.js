// variable declaration
let cardNameInput = document.querySelector(".input-name");
let cardNumInput = document.querySelector(".input-number");
let displayNum1 = document.querySelector("#num1");
let displayNum2 = document.querySelector("#num2");
let displayNum3 = document.querySelector("#num3");
let displayNum4 = document.querySelector("#num4");
let nameDisplay = document.querySelector(".name-wrapper");

function cardDetails() {
  cardNameInput.addEventListener("keyup", (e) => {
    let value = e.target.value;
    nameDisplay.textContent = value;
  });
}
cardDetails();
