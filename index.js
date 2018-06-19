const readline = require('readline-sync');

function getNumberPrompt(promptMessage, errorMessage) {
    if (errorMessage == undefined) {
        errorMessage = "Invalid entry: ";
    }
    console.log(promptMessage);
    numberString = readline.prompt();
    number = +numberString;
    while (numberString == "" || isNaN(number)) {
        console.log(errorMessage + ": " + promptMessage);
        numberString = readline.prompt();
        number = +numberString;
    }
    return number;
}

function getOperatorPrompt(promptMessage, errorMessage) {
    if (errorMessage == undefined) {
        errorMessage = "Invalid entry: ";
    }
    console.log(promptMessage);
    operator = readline.prompt();
    while (!isValidOperator(operator)) {
        console.log(errorMessage + ": " + promptMessage);
        operator = readline.prompt();
    }
    return operator;
}

function doOperation(operator, firstOperand, secondOperand) {
    switch (operator) {
        case "+":
            firstOperand = firstOperand + secondOperand;
            break;
        case "*":
            firstOperand = firstOperand * secondOperand;
            break;
        case "-":
            firstOperand = firstOperand - secondOperand;
            break;
        case "/":
            firstOperand = firstOperand / secondOperand;
            break;
        default:
            firstOperand = "Not a valid operator";
            break;

    }
    return firstOperand;
}

function repeatOperation(operator, numbers) {
    "use strict";
    if (numbers.length < 2) {
        throw "repeat_operation must receive an array with the length >= 2";
    }
    let answer = numbers[0];
    let i = 0;
    while (++i < numbers.length) {
        answer = doOperation(operator, answer, numbers[i]);
    }
    return answer;
}

function isValidOperator(operator) {
    if (operator !== "+" && operator !== "*" && operator !== "-" && operator !== "/") {
        return false;
    }
    return true;
}

function getNumbersPrompt(numbersLength) {
    "use strict";
    let i = -1;
    let numbers = [];
    while (++i < numbersLength) {
        const number = getNumberPrompt("Enter number " + (i + 1),
            "Enter a valid number: ");
        numbers[i] = number;
    }
    return numbers;
}

(function() {
    "use strict";
    console.log("Welcome to the calculator:\n===============")
    while (true) {
        operator = getOperatorPrompt("Enter operator: ", "Enter a valid operator (+, *, -, /)");

        let numbersLength = getNumberPrompt("Enter how many numbers do you want to " + operator
            + "?", "Enter a number: ");
        while (numbersLength < 2) {
            console.log("You must enter at least 2");
            numbersLength = getNumberPrompt("Enter how many numbers do you want to "
                + operator + "?", "Enter a number: ");
        }

        let numbers = getNumbersPrompt(numbersLength);

        let answer = repeatOperation(operator, numbers);

        console.log("The answer is: " + answer);
    }
})();
