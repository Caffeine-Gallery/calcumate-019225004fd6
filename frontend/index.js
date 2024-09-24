import { backend } from 'declarations/backend';

let currentInput = '';
let operation = null;
let firstOperand = null;

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    firstOperand = parseFloat(currentInput);
    operation = op;
    currentInput = '';
}

async function calculateResult() {
    if (firstOperand === null || currentInput === '') return;
    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operation) {
        case '+':
            result = await backend.add(firstOperand, secondOperand);
            break;
        case '-':
            result = await backend.subtract(firstOperand, secondOperand);
            break;
        case '*':
            result = await backend.multiply(firstOperand, secondOperand);
            break;
        case '/':
            result = await backend.divide(firstOperand, secondOperand);
            break;
        default:
            return;
    }

    document.getElementById('display').value = result;
    currentInput = '';
    firstOperand = null;
    operation = null;
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operation = null;
    document.getElementById('display').value = '';
}
