// variable declaration
let cardNameInput = document.querySelector(".input-name");
let cardNumInput1 = document.getElementById("number1");
let cardNumInput2 = document.getElementById("number2");
let cardNumInput3 = document.getElementById("number3");
let cardNumInput4 = document.getElementById("number4");
let displayNum1 = document.getElementById("num1");
let displayNum2 = document.getElementById("num2");
let displayNum3 = document.getElementById("num3");
let displayNum4 = document.getElementById("num4");
let nameDisplay = document.querySelector(".name-wrapper");
let monthInput = document.querySelector(".month");
let yearInput = document.querySelector(".year");
let allCardInputNum = document.querySelectorAll(".input-number");
let yearDisplay = document.querySelector(".year-display");
let monthDisplay = document.querySelector(".month-display");
let cvvDisplay = document.querySelector(".cvv-display");
let cvvInput = document.querySelector(".cvv");
let cardNum = [];
let isCardNumValid;

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
  });
}
cardDetails(cardNameInput, nameDisplay);
cardDetails(monthInput, monthDisplay);
cardDetails(yearInput, yearDisplay);
cardDetails(cvvInput, cvvDisplay);

function checkCardNum(cardNumInput, text) {
  let num1;
  cardNumInput.addEventListener("keyup", (e) => {
    getCardInput();
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

checkCardNum(cardNumInput1, displayNum1);
checkCardNum(cardNumInput2, displayNum2);
checkCardNum(cardNumInput3, displayNum3);
checkCardNum(cardNumInput4, displayNum4);
// const visaCard = "4685881104900755";
// 4685881104900755
444555555555555;

function validate_card(cardNumber) {
  const cardNumbers = cardNumber.split("").map((num) => parseInt(num));
  // const lastDigit = cardNumbers[cardNumbers.length - 1];
  const lastDigit = cardNumbers.at(-1);

  cardNumbers.pop();
  cardNumbers.reverse();
  // console.log(cardNumbers);
  for (let i = 1; i <= cardNumbers.length; i++) {
    // console.log(i);
    if (i % 2 === 1) {
      let newNum = cardNumbers[i - 1] * 2;
      // console.log(newNum);
      if (newNum > 9) {
        newNum = parseInt(newNum / 10) + (newNum % 10);
      }
      cardNumbers[i - 1] = newNum;
      console.log(cardNumbers[i - 1]);
      // console.log(newNum);
    }
  }

  const sum = cardNumbers.reduce((prev, cur) => prev + cur);

  // const isValid = sum % 10 === lastDigit ? "valid" : "invalid";
  const isValid = sum + lastDigit;
  console.log(isValid);
  const checkTrue = isValid % 10 === 0 ? true : false;
  return checkTrue;
}

function getCardInput() {
  const errorSms = document.querySelector(".error");
  let num1Value = cardNumInput1.value;
  let num2Value = cardNumInput2.value;
  let num3Value = cardNumInput3.value;
  let num4Value = cardNumInput4.value;
  if (
    num1Value.length >= 4 &&
    num2Value.length >= 4 &&
    num3Value.length >= 4 &&
    num4Value.length >= 4
  ) {
    allCardInputNum.forEach((input) => {
      cardNum.push(input.value);
    });
    const allNum = cardNum.join("");

    isCardNumValid = validate_card(allNum);
    if (isCardNumValid) {
      errorSms.textContent = "";
      allCardInputNum.forEach((input) => {
        input.style.border = "1px solid gray";
      });
    } else {
      errorSms.textContent = "invalid card number";
      allCardInputNum.forEach((inp) => {
        inp.style.border = "1px solid red";
      });
    }
  }
  cardNum = [];
}
