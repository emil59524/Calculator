const readline = require('readline-sync');
(function() {
    "use strict";
    console.log("Enter the first number");
    var first_operand = +readline.prompt();
    console.log("Enter the second number");
    var second_operand = +readline.prompt();
    console.log("The product of the numbers = " + (first_operand * second_operand));

})();