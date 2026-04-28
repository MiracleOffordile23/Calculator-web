let calculator = '';

function updateDisplay() {
    document.getElementById('display').value = calculator;
}



function deleteLast() {
    calculator = calculator.slice(0, -1);
    updateDisplay();
}
