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
let allCardInputNum = document.querySelectorAll(".input-number");
let yearDisplay = document.querySelector(".year-display");
let monthDisplay = document.querySelector(".month-display");
let cvvDisplay = document.querySelector(".cvv-display");
let cvvInput = document.querySelector(".cvv");
let cardNum = [];

function isInputValid() {
  allCardInputNum.forEach((input) => {
    input.addEventListener("keyup", () => {
      const regex = /[0-9]+/;
      let isValid = regex.test(input.value);

      if (isValid && input.value) {
        input.style.border = "1px solid gray";
      } else input.style.border = "2px solid red";
    });
  });
}
isInputValid();
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
    getCardInput();
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

// const visaCard = "4685881104900755";
// 4685881104900755

function validate_card(cardNumber) {
  const cardNumbers = cardNumber.split("").map((num) => parseInt(num));
  // const lastDigit = cardNumbers[cardNumbers.length - 1];
  const lastDigit = cardNumbers.at(-1);

  cardNumbers.pop();
  cardNumbers.reverse();
  // console.log(cardNumbers);
  for (let i = 1; i <= cardNumbers.length; i++) {
    if (i % 2 === 1) {
      let newNum = cardNumbers[i - 1] * 2;
      // console.log(newNum);
      if (newNum > 9) {
        newNum = parseInt(newNum / 10) + (newNum % 10);
      }
      cardNumbers[i - 1] = newNum;
    }
  }
  let c;
  const sum = cardNumbers.reduce((prev, cur) => prev + cur);
  // console.log(sum);
  // const isValid = sum % 10 === lastDigit ? "valid" : "invalid";
  const isValid = sum + lastDigit;
  // console.log(isValid);
  return isValid;
}
// validate_card(visaCard);

function getCardInput() {
  let num1Value = cardNumInput1.value;
  let num2Value = cardNumInput2.value;
  let num3Value = cardNumInput3.value;
  let num4Value = cardNumInput4.value;
  if (num1Value >= 4 && num2Value >= 4 && num3Value >= 4 && num4Value >= 4) {
    allCardInputNum.forEach((input) => {
      cardNum.push(input.value);
      // console.log(cardNum);
    });
    const allNum = cardNum.join("");
    console.log(allNum);
    validate_card(allNum);
  }
  cardNum = [];
}
