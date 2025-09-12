const prompt = require('prompt-sync')()



function getNumber(numberString){
    while(true){
        console.log("Enter number" +numberString+": ")
        const num = parseFloat(prompt("> "))
    

        if(isNaN(num)){
            console.log("Invalid Number, Please try again")
        }else{
            return num;
            }
        }
}

const num1 = getNumber(' One')
const num2 = getNumber(' Two')
console.log("Enter Operator (+, -, *, /): ")
const operation = prompt("> ")

//Learn more about functions.
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
        if(num2 === 0){
            valid = false;
            console.log("Division by zero is not allowed");
            return;
        }
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