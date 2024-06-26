document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');
    let displayValue = '';


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (button.classList.contains('reset')) {
                displayValue = '';
                display.textContent = '0';
            } else if (button.classList.contains('del')) {
                displayValue = displayValue.slice(0, -1);
                
                display.textContent = displayValue || '0';
            } else if (button.classList.contains('equal')) {
                try {
                    if (displayValue && /^[0-9.]/.test(displayValue) && /[0-9]$/.test(displayValue)) {
                        displayValue = displayValue.replace(/x/g, '*');
                        displayValue = eval(displayValue);
                        displayValue = parseFloat(displayValue.toFixed(2));
                        display.textContent = displayValue.toString();
                    } else {
                        display.textContent = 'Error';
                    }
                } catch (e) {
                    display.textContent = 'Error';
                }

            } else {
                displayValue += buttonText;

                display.textContent = displayValue;
            }
        });
    });

    // Attach event listener for all buttons to update display
    buttons.forEach(button => {
        button.addEventListener('click', updateDisplay);
    });
}); 
