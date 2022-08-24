// variable declaration
let cardNameInput = document.querySelector(".input-name");
let cardNumInput1 = document.querySelector("#number1");
let cardNumInput2 = document.querySelector("#number2");
let cardNumInput3 = document.querySelector("#number3");
let cardNumInput4 = document.querySelector("#number4");
let displayNum1 = document.querySelector("#num1");
let displayNum2 = document.querySelector("#num2");
let displayNum3 = document.querySelector("#num3");
let displayNum4 = document.querySelector("#num4");
let nameDisplay = document.querySelector(".name-wrapper");
let monthInput = document.querySelector(".month");
let yearInput = document.querySelector(".year");
let yearDisplay = document.querySelector(".year-display");
let monthDisplay = document.querySelector(".month-display");
let cvvDisplay = document.querySelector(".cvv-display");
let cvvInput = document.querySelector(".cvv");

function cardDetails(cardNumInput, text) {
  let num1;
  cardNumInput.addEventListener("keyup", (e) => {
    let value = e.target.value;
    num1 = value;
    text.textContent = num1.toUpperCase();
    if (e.target.textLength === 4) {
      e.target.nextElementSibling.focus();
    }
    if (e.target.textLength <= 0) {
      e.target.previousElementSibling.focus();
    }
  });
}
cardDetails(cardNameInput, nameDisplay);
cardDetails(cardNumInput1, displayNum1);
cardDetails(cardNumInput2, displayNum2);
cardDetails(cardNumInput3, displayNum3);
cardDetails(cardNumInput4, displayNum4);
cardDetails(monthInput, monthDisplay);
cardDetails(yearInput, yearDisplay);
cardDetails(cvvInput, cvvDisplay);
