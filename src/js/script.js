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

    if (name === "" || !validateName(name)) {
        alert('Por favor, preencha campo nome corretamente!');
        return;
    }

    if (email === "" || !validateEmail(email)) {
        alert('Por favor, preencha campo email corretamente!');
        return;
    }

    if (message === "" || message.length < 3) {
        alert('Por favor, preencha campo messagem corretamente!');
        return;
    }

    // Se todos os campos estiverem preenchidos
    form.submit();
    
});

// função que valida email
function validateEmail(email) {
    const emailRegex = new RegExp(
        /\S+@\S+\.\S+/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return  false;
}

function validateName(name) {
    const nameRegex = new RegExp(
        /^[a-zA-Z]{3,}$/
    );

    if (nameRegex.test(name)) {
        return true;
    }

    return  false;
}