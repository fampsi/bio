const form = document.querySelector('form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const messageTextArea = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // verificando se os campos estao vazios
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageTextArea.value;

    if (name === "" || name.length < 3) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (email === "" || !validateEmail(email)) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (message === "" || message.length < 3) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Se todos os campos estiverem preenchidos
    form.submit();
    
});

// função que valida email
function validateEmail(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-=Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return  false;
}