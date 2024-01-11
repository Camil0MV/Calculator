document.addEventListener('DOMContentLoaded', function () {
    let calculatorState = {
        currentNumber: "0",
        storedNumber: null,
        operator: null,
    };

    const allClear = document.getElementById('AC');

    const zero = document.getElementById('0');
    const one = document.getElementById('1');
    const two = document.getElementById('2');
    const three = document.getElementById('3');
    const four = document.getElementById('4');
    const five = document.getElementById('5');
    const six = document.getElementById('6');
    const seven = document.getElementById('7');
    const eight = document.getElementById('8');
    const nine = document.getElementById('9');

    const sum = document.getElementById('+');
    const subtraction = document.getElementById('-');
    const multiplication = document.getElementById('X');
    const division = document.getElementById('/');
    const equal = document.getElementById('=');
    
    const decimal = document.getElementById('decimal');

    function updateResult() {
        document.getElementById("answer").textContent = calculatorState.currentNumber;
    }

    function clearCalculator() {
        calculatorState.currentNumber = "0";
        calculatorState.storedNumber = null;
        calculatorState.operator = null;
        updateResult();
    }

    function handleNumberClick(clickedNumber) {
        if (calculatorState.currentNumber === "0") {
            calculatorState.currentNumber = clickedNumber;
        } else {
            calculatorState.currentNumber += clickedNumber;
        }
        updateResult();
    }

    function handleDecimalPoint() {
        if (calculatorState.currentNumber === null) {
            return
        } else {
            calculatorState.currentNumber += ".";
        }
        updateResult();
    }

    function handleOperatorClick(clickedOperator) {
        if (calculatorState.operator !== null) {
            performOperation();
        }

        calculatorState.storedNumber = calculatorState.currentNumber;
        calculatorState.currentNumber = "0";
        calculatorState.operator = clickedOperator;
    }

    function performOperation() {
        const current = parseFloat(calculatorState.currentNumber);
        const stored = parseFloat(calculatorState.storedNumber);

        if (!isNaN(stored) && !isNaN(current)) {
            switch (calculatorState.operator) {
                case '+':
                    calculatorState.currentNumber = (stored + current).toString();
                    break;
                case '-':
                    calculatorState.currentNumber = (stored - current).toString();
                    break;
                case 'X':
                    calculatorState.currentNumber = (stored * current).toString();
                    break;
                case '/':
                    calculatorState.currentNumber = (stored / current).toString();
                    break;
            }
        }

        calculatorState.storedNumber = null;
        calculatorState.operator = null;
        updateResult();
    }

    allClear.addEventListener('click', clearCalculator);

    zero.addEventListener('click', () => handleNumberClick("0"));
    one.addEventListener('click', () => handleNumberClick("1"));
    two.addEventListener('click', () => handleNumberClick("2"));
    three.addEventListener('click', () => handleNumberClick("3"));
    four.addEventListener('click', () => handleNumberClick("4"));
    five.addEventListener('click', () => handleNumberClick("5"));
    six.addEventListener('click', () => handleNumberClick("6"));
    seven.addEventListener('click', () => handleNumberClick("7"));
    eight.addEventListener('click', () => handleNumberClick("8"));
    nine.addEventListener('click', () => handleNumberClick("9"));
    
    decimal.addEventListener('click', () => handleDecimalPoint("."));

    sum.addEventListener('click', () => handleOperatorClick('+'));
    subtraction.addEventListener('click', () => handleOperatorClick('-'));
    multiplication.addEventListener('click', () => handleOperatorClick('X'));
    division.addEventListener('click', () => handleOperatorClick('/'));

    equal.addEventListener('click', performOperation);
});