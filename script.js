//DOM Elements
const display = document.querySelector('.display');
const addInput = document.getElementById('add');
const subtractInput = document.getElementById('subract');
const multiplyInput = document.getElementById('multiply');
const divideInput = document.getElementById('divide');
const equals = document.getElementById('equals');
const numbers = document.querySelectorAll('.num-inputs input')

//Global Variables
let firstOperand;
let secondOperand;
let operator;
// Create operaion functions for add/subtract/multiply/divide
const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

//clear operands
const clear = function(){
    firstOperand;
    secondOperand;
    operator;
}

//create a function that will take two numbers and then call an operation function

const operate = function (e, firstNum, secondNum, func) {
    let result;

}


//Create a function to store the values into the display on the html
const outputDisplay = function (e) {
    let value = e.target.value;  
    display.innerHTML += value;
}

//Add event listener
numbers.forEach(num => num.addEventListener('click', outputDisplay));
addInput.addEventListener('click', operate);
equals.addEventListener('click', operate);