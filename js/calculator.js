const OPERATOR_EQUALS = "=";
const OPERATOR_ADD = "+";
const OPERATOR_SUBTRACT = "-";
const OPERATOR_MULTIPLY = "*";
const OPERATOR_DIVIDE = "/";

function makeOperation(operator = OPERATOR_EQUALS, a = 0, b = 0) {
  return {
    operator,
    a,
    b,
  };
}

function evaluateOperation(operation) {
  switch (operation.operator) {
    case OPERATOR_EQUALS:
      return (operation.b === 0) ? operation.a : operation.b;
    case OPERATOR_ADD:
      return operation.a + operation.b;
      break;
    case OPERATOR_SUBTRACT:
      return operation.a - operation.b;
      break;
    case OPERATOR_MULTIPLY:
      return operation.a * operation.b;
      break;
    case OPERATOR_DIVIDE:
      return (operation.b === 0) ? 0 : (operation.a / operation.b);
      break;
    default:
      console.error("Unrecognized operator!");
      return null;
  }
}

let accumulator = 0;
let operation = makeOperation();
let calculatorText = "0";

function setViews(viewClasses, text) {
  let views = document.querySelectorAll(viewClasses);
  views.forEach((view) => {
    view.innerText = text;
  });
}

function refreshView() {
  setViews(".accumulator-view", operation.a);
  setViews(".operator-view", operation.operator);
  setViews(".calculator-text-view", calculatorText);
}

let numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (calculatorText === "0") {
      calculatorText = "";
    }
    calculatorText += button.innerText;
    refreshView();
  });
});

let backspaceButtons = document.querySelectorAll(".backspace-button");
backspaceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (calculatorText !== "0") {
      calculatorText = calculatorText.slice(0, -1);
    }
    if (calculatorText == "") {
      calculatorText = "0";
    }
    refreshView();
  });
});

let operationButtons = document.querySelectorAll(".operation-button");
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operation.b = parseInt(calculatorText);
    let accumulator = evaluateOperation(operation);
    calculatorText = "0";
    operation = makeOperation(button.innerText, accumulator);
    refreshView();
  });
});
    
