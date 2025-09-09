const prompt = require('prompt-sync')()

console.log("Enter first number: ")
const num1 = parseFloat(prompt("> "))
console.log("Enter Second number: ")
const num2 = parseFloat(prompt("> "))
console.log("Enter Operator (+, -, *, /): ")
const operation = prompt("> ")

let result;
let valid = true;
switch(operation){
    case "+":
        result = num1 + num2
        break;
    case "-":
        result = num1 - num2
        break;
    case "/":
        result = num1 / num2
        break;
    case "*":
        result = num1 * num2
        break;
    default:
        console.log("Invalid Operator")
        valid = false;
        return;
}

if(valid) 
    console.log(num1+" "+operation+" "+num2 + " = " + result)


while (condition){

}
