/*

Variables 
String("String")

Number(ints, floats, doubles)

Boolean(true or false (lowercase))

Undefined(unknown variable)

Null(explicitly set to be empty or non existent)

object will be visited later

can be set with var, let and const (use let and const)


comparison operators

==  loose comparison operator(compares two values but ignores data-type, e.g 7 == "7" would be true, 
    it works by coercing the operands to match the data type.)

=== strict equality operator (checks whether the operands and types are equal basically, e.g "1" === 1 is false)

!=  loose not equal to

!== strict not equal to

<   less than

>   greater than

<=  less than or equal to

>=  greater than or equal to

&&  and 

||  or

!   not

the continue keyword is a skip(Once encountered, it skips the current iteration of the loop and moves to the next iteration. In other words, it stops executing the remaining code inside the loop for the current iteration and jumps to the next iteration or the beginning of the loop.)

the break keyword is a stop(as soon as it is encountered, it immediately terminates the entire loop, regardless of whether the loop condition is still true or not. The program then continues executing the code that follows the loop.)

const array = [1, 2, 3, 4, 5]; // Example array,   Arrays start at index 0
array[0] = 10; // Modifies the first element of the array (console.log(array[0]); now Outputs: 10)
array.push(6); // Adds a new element to the end of the array (console.log(array); now Outputs: [10, 2, 3, 4, 5, 6])
array.pop(); // Removes the last element from the array (console.log(array); now Outputs: [10, 2, 3, 4, 5])
array.length; // Returns the number of elements in the array (console.log(array.length); Outputs: 5)
array.splice(1, 2); // Removes 2 elements starting from index 1 (console.log(array); now Outputs: [10, 4, 5])
array.slice(1, 3); // Returns a new array containing elements from index 1 to 2 (console.log(array.slice(1, 3)); Outputs: [4, 5])


objects are a way that we can group related data and functionality together. 
They are a collection of key-value pairs, where each key is a string (or symbol) that identifies a property or method, and the value can be any data type, including other objects or functions.

many types in javascript are mutable, meaning they can be changed after they are created.

Functions are blocks of code designed to perform a particular task. They are executed when "called" or "invoked". Functions can take inputs, called parameters, and can return an output.

function functionName(parameter1, parameter2) {
    // Code to be executed
    return result; // Optional return statement
}]
*/

