//Create a function called greet that takes a name parameter

function greet(name){
    return (name); //Make the greet function return "Hello, [name]!"
}

//Create a function called add that takes two parameters

function add(a, b) {
    let sum = a + b; 
    return sum; //Make the add function return the sum of both paramters
}

//Call both functions and store their results in variables

let greeting = greet("Clyde")
let result = add(9, 9)

//Print the results to the console

console.log("Hello, " + greeting + "!");
console.log(result);