window.addEventListener('DOMContentLoaded', () => {
    const numbers = [
        '1', '2', '3', 
        '4', '5', '6', 
        '7', '8', '9', 
        '0', '+', '-', 
        '/','=', '.', 
        'c', '(', ')', '*'
    ];

    const calculator = document.querySelector('.calculator'),
        enter = document.querySelector('#enter'),
        buttonContainer = document.querySelector('.button-container');

    const createButtons = () => {
        numbers.forEach(number => {
            const button = document.createElement('button');
            if (number == '=') {
                button.className = 'btn btn-success button';
            } else {
                button.className = 'btn btn-primary button';
            }
            button.textContent = number;
            buttonContainer.append(button);
        });
    };

    createButtons();

    const onClick = (event) => {
        const target = event.target;
        if (target.innerHTML === 'c') {
            console.log('c');
            enter.innerHTML = '0';
        } else
        if (target.innerHTML === '=') {
            console.log('=');
            enter.innerHTML = eval(enter.innerHTML);
        } else
        if (enter.innerHTML === '0') {
            enter.innerHTML = target.innerHTML;
        } else {
            enter.innerHTML += target.innerHTML;
        }

    }

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', onClick);
    }); 
});