// Operations such as addition, subtraction, multiplication, division
/* 
input = 1, 2, add
output = "Addition result is 3"
input = 1, 2, subtract
output = "Subtraction result is -1"
input = 1, 2, mutiply
output = "Multiplication result is 2"
input = 1, 2, divide
output = "Division result is 0.5" 
*/

function operations(num1, num2, operator) {
  let total = 0;
  switch (operator) {
    case "add":
      total = num1 + num2;
      break;
    case "subtract":
      total = num1 - num2;
      break;

    case "multiply":
      total = num1 * num2;
      break;
    case "divide":
      total = num1 / num2;
      break;
    default:
      total = num1 + num2;
      break;
  }
  return total;
}

var totalValue = operations(1, 2, "add");
console.log("Addition result of 1, 2 is " + totalValue);
var totalValue = operations(1, 2, "subtract");
console.log("Subtraction result of 1, 2 is " + totalValue);
var totalValue = operations(1, 2, "multiply");
console.log("Multiplication result of 1, 2 is " + totalValue);
var totalValue = operations(1, 2, "divide");
console.log("Division result of 1, 2 is " + totalValue);
