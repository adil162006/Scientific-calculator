const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = Number.isInteger(result) ? result : result.toFixed(8);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSin() {
    try {
        const value = eval(display.value);
        display.value = Math.sin(value * Math.PI / 180).toFixed(8);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateCos() {
    try {
        const value = eval(display.value);
        display.value = Math.cos(value * Math.PI / 180).toFixed(8);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateTan() {
    try {
        const value = eval(display.value);
        display.value = Math.tan(value * Math.PI / 180).toFixed(8);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateLog() {
    try {
        const value = eval(display.value);
        display.value = Math.log10(value).toFixed(8);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSqrt() {
    try {
        const value = eval(display.value);
        display.value = Math.sqrt(value).toFixed(8);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePi() {
    display.value += Math.PI;
}

function calculateE() {
    display.value += Math.E;
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});