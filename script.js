const clearButton = document.getElementById("clearButton");
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const multiplyButton = document.getElementById("multiplyButton");
const divisionButton = document.getElementById("divisionButton");
const equalsButton = document.getElementById("equalButton");
const zeroButton = document.getElementById("zeroButton");
// const pointButton = document.getElementById("pointButto");
let displayOne = document.getElementById("displayOne");
let displayTwo = document.getElementById("displayTwo");
let operatorDisplay = document.getElementById("operatorID");
let operator;
let promptOne = "";
let promptTwo = "";
let isPromptTwoAndOperatorFull = true;

clearButton.addEventListener("click", () => {
  clearDisplay();
});

plusButton.addEventListener("click", () => {
  displayOperator("+");
});

minusButton.addEventListener("click", () => {
  displayOperator("-");
});

multiplyButton.addEventListener("click", () => {
  displayOperator("*");
});

divisionButton.addEventListener("click", () => {
  displayOperator("/");
});

oneButton.addEventListener("click", () => {
  displayPrompt("1");
});

twoButton.addEventListener("click", () => {
  displayPrompt("2");
});

threeButton.addEventListener("click", () => {
  displayPrompt("3");
});

fourButton.addEventListener("click", () => {
  displayPrompt("4");
});

fiveButton.addEventListener("click", () => {
  displayPrompt("5");
});

sixButton.addEventListener("click", () => {
  displayPrompt("6");
});

sevenButton.addEventListener("click", () => {
  displayPrompt("7");
});

eightButton.addEventListener("click", () => {
  displayPrompt("8");
});

nineButton.addEventListener("click", () => {
  displayPrompt("9");
});

zeroButton.addEventListener("click", () => {
  displayPrompt("0");
});

// pointButton.addEventListener("click", () => {
//   displayPrompt(".");
// });

equalsButton.addEventListener("click", () => {
  let result = calculate();
  displayTwo.textContent = result;
  displayOne.textContent = "";
});

function displayPrompt(num) {
  if (!operator) {
    promptTwo += num;
    displayTwo.textContent = promptTwo;
  } else {
    promptOne += num;
    displayOne.textContent = promptOne;
  }
  console.log(promptOne, promptTwo, operator);
}

function clearDisplay() {
  displayOne.textContent = "";
  displayTwo.textContent = "";
  operatorDisplay.textContent = "";
  operator = undefined;
  promptOne = "";
  promptTwo = "";
}

function displayOperator(op) {
  operator = op;
  operatorDisplay.textContent = operator;
  console.log(promptOne, promptTwo, operator);
}

function calculate() {
  return (result = eval(promptTwo + operator + promptOne));
}
