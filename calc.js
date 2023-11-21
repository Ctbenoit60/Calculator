
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculateResult() {
  var displayValue = document.getElementById('display').value;
  try {
    var result = evaluateExpression(displayValue);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function evaluateExpression(expression) {
  // Simple expression parser and evaluator
  var tokens = expression.match(/\d+|\+|\-|\*|\//g);
  var result = parseFloat(tokens[0]);

  for (var i = 1; i < tokens.length; i += 2) {
    var operator = tokens[i];
    var operand = parseFloat(tokens[i + 1]);

    switch (operator) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;
      case '*':
        result *= operand;
        break;
      case '/':
        result /= operand;
        break;
      default:
        throw new Error('Invalid operator: ' + operator);
    }
  }

  return result;
}
