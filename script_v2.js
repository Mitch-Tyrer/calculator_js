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
    display.value = displayValue;
}

function digits(e) {
    const value = e.target.value;
    //check if there is already a decimal, if so ignore it. !secondOperand makes sure that second operand is false before running this check to allow new inputs.
    if (value === '.' && displayValue.includes('.') && !secondOperand){
        console.log('multiple decimals');
        return;
    }

    //if secondOperand is set to true, the display value is updated with the new input
    if (secondOperand) {
        //if next input is a decimal, change the displayValue to '0.' and update secondOperand to False
        if (value === '.') {
            displayValue = '0.'
            secondOperand = false;
        } else {
            displayValue = value;
            secondOperand = false;
        }
    } else {
        //checks to see if the input is a decimal and makes sure the '0' remains on the display.
        if (value === '.' && displayValue === '0') {
            displayValue = '0.'
        } else {
            displayValue = displayValue === '0' ? value : displayValue + value;
        }
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
        displayValue = String(parseFloat(result.toFixed(5)));
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