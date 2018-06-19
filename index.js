const readline = require('readline-sync');

function get_number_prompt(prompt_message, error_message) {
    if (error_message == undefined) {
        error_message = "Invalid entry: ";
    }
    console.log(prompt_message);
    number = +readline.prompt();
    while (isNaN(number)) {
        console.log(error_message + ": " + prompt_message);
        number = +readline.prompt();
    }
    return number;
}

function get_operator_prompt(prompt_message, error_message) {
    if (error_message == undefined) {
        error_message = "Invalid entry: ";
    }
    console.log(prompt_message);
    operator = readline.prompt();
    while (!is_valid_operator(operator)) {
        console.log(error_message + ": " + prompt_message);
        operator = readline.prompt();
    }
    return operator;
}

function do_operation(operator, first_operand, second_operand) {
    switch (operator) {
        case "+":
            first_operand = first_operand + second_operand;
            break;
        case "*":
            first_operand = first_operand * second_operand;
            break;
        case "-":
            first_operand = first_operand - second_operand;
            break;
        case "/":
            first_operand = first_operand / second_operand;
            break;
        default:
            first_operand = "Not a valid operator";
            break;

    }
    return first_operand;
}

function is_valid_operator(operator) {
    if (operator !== "+" && operator !== "*" && operator !== "-" && operator !== "/") {
        return false;
    }
    return true;
}

(function() {
    "use strict";
    console.log("Welcome to the calculator:\n===============")
    while (true) {
        operator = get_operator_prompt("Enter operator: ", "Enter a valid operator (+, *, -, /)");
        let answer = 0;
        let numbers_length = get_number_prompt("Enter how many numbers do you want to " + operator
            + "?", "Enter a number: ");
        while (numbers_length < 2) {
            console.log("You must enter at least 2");
            numbers_length = get_number_prompt("Enter how many numbers do you want to "
                + operator + "?", "Enter a number: ");
        }
        let i = -1;

        while (++i < numbers_length) {
            const number = get_number_prompt("Enter number " + (i + 1),
                "Enter a valid number: ");
            if (i == 0) {
                answer = number;
            } else {
                answer = do_operation(operator, answer, number);
            }
        }

        console.log("The answer is: " + answer);
    }
})();
