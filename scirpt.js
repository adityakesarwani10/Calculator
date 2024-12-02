let curr = '';
let prev = '';
let operation = null;

function clearDisplay1(del) {
    if(curr !== '') {
        curr = '';
        updateDisplay();
    }
    else if(curr === '' && operation === null && prev !== '') {
        prev = '';
        updateDisplay();
    }
    else if(curr === '' && operation !== null && prev !== '') {
        operation = null;
        updateDisplay();
    }
}

function appendNumber(number) {
    if(curr === '.' && prev.includes('.')) 
        return;
    curr += number;
    updateDisplay();
}
function clearDisplay(del) {
    curr = '';
    prev = '';
    operation = null;
    updateDisplay();
}
function chooseOperation(op) {
    if(curr === '') 
        return;
    if(prev !== '') {
        calculate();
    }
    prev = curr;
    operation = op;
    curr = '';
}
const calculate = () => {
    let result;
    let curres = parseFloat(curr);
    let prevres = parseFloat(prev);
    if(isNaN(curres) || isNaN(prevres))  {
        return;
    }
    switch(operation) {
        case '+':
            result = curres + prevres; 
            break;
        case '-':
            result = prevres - curres;
            break;
        case '*': 
            result =  prevres * curres;
            break;
        case '/':
            result =  prevres/curres;
            break;
        case '%':
            result = prevres % curres;
            break;
    }
    curr = result.toString();
    prev = curr;
    curr = '';
    updateDisplay();
}
const updateDisplay = () => {
    const display = document.getElementById("display");
    display.innerText = curr || prev || '0'; 
}
