function clearDisplay() {
    document.querySelector('[name="display"]').value = '';
}

function deleteLast() {
    const display = document.querySelector('[name="display"]');
    display.value = display.value.toString().slice(0, -1);
}

function appendToDisplay(value) {
    const display = document.querySelector('[name="display"]');
    display.value += value;
}

function calculate() {
    const display = document.querySelector('[name="display"]');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
