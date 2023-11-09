document.querySelector('form').addEventListener('click', (event) => {
    event.preventDefault(); 

    const clickedElement = event.target;

    if (clickedElement.tagName === 'BUTTON') {
        handleButtonClick(clickedElement.innerText);
    }
});


function handleButtonClick(value) {
    if (value === 'C') {
        display.value = '';
    } else if (value === '←') {
        display.value = display.value.slice(0, -1);
    } else if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    } else {
        display.value += value;
    }
}
