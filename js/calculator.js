const OPERATOR_NONE = 0;
const OPERATOR_ADD = 1;
const OPERATOR_SUBTRACT = 2;
const OPERATOR_MULTIPLY = 3;
const OPERATOR_DIVIDE = 4;

function makeOperation(operator, a = 0, b = 0) {
  return {
    operator,
    a,
    b,
  };
}

function evaluateOperation(operation) {
  switch (operation.operator) {
    case OPERATOR_NONE:
      return null;
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
      return operation.a / operation.b;
      break;
    default:
      console.error("Unrecognized operator!");
      return null;
  }
}


