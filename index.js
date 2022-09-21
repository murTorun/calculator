function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "*") return multiply(a, b);
    if (operator === "/") return divide(a, b);
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display-number");
let displayValue = "";
let num1;
let operator;
let previousSum;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "Clear") {
            display.textContent = "";
            displayValue = "";
            num1 = undefined;
            operator = undefined;
            previousSum = undefined;
            return;
        }
        if (button.classList.contains("operator")) {
            if (!displayValue) return; // if display is empty
            if (num1 !== undefined) {
                num1 = operate(operator, num1, displayValue);
            }
            num1 = operator === undefined ? displayValue : num1;
            operator = button.textContent;

            displayValue = "";
            display.textContent = "";
        }
        if (button.id === "equals") {
            displayValue = operate(operator, num1, displayValue);
            operator = undefined;
            num1 = displayValue;
            display.textContent = displayValue;
        }
        if (button.parentElement.classList.contains("numbers")) {
            display.textContent += button.textContent;
            displayValue += button.textContent;
        }
    });
});
