const readline = require('readline-sync');
(function() {
    "use strict";
    console.log("Welcome to the calculator:\n===============")
    console.log("Enter the first number: ");
    const first_operand = +readline.prompt();
    console.log("Enter the second number: ");
    const second_operand = +readline.prompt();
    console.log("Enter the operator:");
    const operator = readline.prompt();
    let answer;
    switch (operator) {
        case "+":
            answer = first_operand + second_operand;
            break;
        case "*":
            answer = first_operand * second_operand;
            break;
        case "-":
            answer = first_operand - second_operand;
            break;
        case "/":
            answer = first_operand / second_operand;
            break;
        default:
            answer = "Not a valid operator";
            break;

    }

    console.log("The answer is: " + answer);

})();