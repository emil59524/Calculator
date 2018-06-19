const readline = require('readline-sync');

function get_number_prompt(prompt_message, error_message) {
    if (error_message == undefined) {
        error_message = "Invalid entry: ";
    }
    console.log(prompt_message);
    numberString = readline.prompt();
    number = +numberString;
    while (numberString == "" || isNaN(number)) {
        console.log(error_message + ": " + prompt_message);
        numberString = readline.prompt();
        number = +numberString;
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

function repeat_operation(operator, numbers) {
    "use strict";
    if (numbers.length < 2) {
        throw "repeat_operation must receive an array with the length >= 2";
    }
    let answer = numbers[0];
    let i = 0;
    while (++i < numbers.length) {
        answer = do_operation(operator, answer, numbers[i]);
    }
    return answer;
}

function is_valid_operator(operator) {
    if (operator !== "+" && operator !== "*" && operator !== "-" && operator !== "/") {
        return false;
    }
    return true;
}

function get_numbers_prompt(numbers_length) {
    "use strict";
    let i = -1;
    let numbers = [];
    while (++i < numbers_length) {
        const number = get_number_prompt("Enter number " + (i + 1),
            "Enter a valid number: ");
        numbers[i] = number;
    }
    return numbers;
}

(function() {
    "use strict";
    console.log("Welcome to the calculator:\n===============")
    while (true) {
        operator = get_operator_prompt("Enter operator: ", "Enter a valid operator (+, *, -, /)");

        let numbers_length = get_number_prompt("Enter how many numbers do you want to " + operator
            + "?", "Enter a number: ");
        while (numbers_length < 2) {
            console.log("You must enter at least 2");
            numbers_length = get_number_prompt("Enter how many numbers do you want to "
                + operator + "?", "Enter a number: ");
        }

        let numbers = get_numbers_prompt(numbers_length);

        let answer = repeat_operation(operator, numbers);

        console.log("The answer is: " + answer);
    }
})();
