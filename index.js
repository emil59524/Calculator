const readline = require('readline-sync');
(function() {
    "use strict";
    console.log("Enter the first number: ");
    const first_operand = +readline.prompt();
    console.log("Enter the second number: ");
    const second_operand = +readline.prompt();
    const answer = first_operand * second_operand;
    console.log("The product of the numbers is " + answer);

})();