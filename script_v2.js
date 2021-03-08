//DOM Elements
const display = document.querySelector('.display');
const addInput = document.getElementById('add');
const subtractInput = document.getElementById('subtract');
const multiplyInput = document.getElementById('multiply');
const divideInput = document.getElementById('divide');
const equals = document.getElementById('equals');
const numbers = document.querySelectorAll('.num-inputs input')
const clearInput = document.getElementById('clear');

//Global Variables
let displayValue = '0'
let firstOperand = null;
let operator = null;
let secondOperand = false;

function updateDisplay() {
    display.innerHTML = displayValue;
}

function digits(e) {
    if (secondOperand) {
        displayValue = e.target.value;
        secondOperand = false
    } else {
        displayValue = displayValue === '0' ? e.target.value : displayValue + e.target.value;
    }

    updateDisplay();
}

//calculate switch statment
function calculate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            //returns the second operand by itself to be used as the first operand in the handle operator fucntion with "=" is entered. This allows you to start a new calculation.
            return b;
    }
}

//clear function
function clear() {
    displayValue = '0'
    firstOperand = null;
    operator = null;
    secondOperand = null;
    updateDisplay();
}

function handleOperator(e) {
    inputValue = parseFloat(displayValue);

    if (operator && secondOperand) {
        operator = e.target.value;
        return;
    }

    if (firstOperand === null && !isNaN(displayValue)) {
        firstOperand = inputValue;
        operator = e.target.value;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        displayValue = result;
        firstOperand = result;;
    }
    operator = e.target.value;
    secondOperand = true;
    updateDisplay();
}

//Event Listeners
numbers.forEach(num => num.addEventListener('click', digits));
clearInput.addEventListener('click', clear);
addInput.addEventListener('click', handleOperator);
multiplyInput.addEventListener('click', handleOperator);
subtractInput.addEventListener('click', handleOperator);
divideInput.addEventListener('click', handleOperator);
equals.addEventListener('click', handleOperator);