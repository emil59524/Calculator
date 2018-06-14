const readline = require('readline-sync');
(function() {
    "use strict";
    console.log("Welcome to the calculator: \n=============")
    console.log("Enter the first number: ");
    const first_operand = +readline.prompt();
    console.log("Enter the second number: ");
    const second_operand = +readline.prompt();
    let answer;
    console.log("Enter the operator: ");
    const operator = readline.prompt();
    if (operator == "+") {
        answer = first_operand + second_operand;
    } else if (operator == "*") {
        answer = first_operand * second_operand;
    } else if (operator == "-") {
        answer = first_operand - second_operand;
    } else if (operator == "/") {
        answer = first_operand / second_operand;
    } else {
        answer = "Invalid operator";
    }
    console.log("The product of the numbers is " + answer);

})();