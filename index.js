const readline = require('readline-sync');
(function() {
    "use strict";
    console.log("Welcome to the calculator:\n===============")
    console.log("Enter the operator:");
    let operator = readline.prompt();
    let valid_operators = ["*", "+", "-", "/"];
    while (!is_valid_operator(operator)) {
        console.log("Enter a valid operator(+, *, -, /): ");
        operator = readline.prompt();
    }
    let answer = 0;
    console.log ("Enter how many numbers do you want to " + operator + "?");
    let numbers_length = +readline.prompt();
    while (numbers_length < 2) {
        console.log("You must enter at least 2 numbers");
        numbers_length = +readline.prompt();
    }
    let i = 0;
    let numbers = [];
    do {
        console.log("Enter number " + (i + 1));
        numbers[i] = +readline.prompt();
    } while (++i < numbers_length);

    answer = numbers.reduce(function(first, second) {return eval(first + operator + 
        second)});
    console.log("The answer is: " + answer);

})();

function is_valid_operator(operator) {
    if (operator !== "+" && operator !== "*" && operator !== "-" && operator !== "/") {
        return false;
    }
    return true;
}