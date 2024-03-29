const form = document.querySelector('form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const messageTextArea = document.querySelector('#message');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageTextArea.value;

    checkInputName(name);
    checkInputEmail(email);
    checkTextareaMessage(message);

    const formItens = form.querySelectorAll(".form-section");

    const isValid = [...formItens].every( item => {
        return item.className === "form-section";
    });

    if (isValid) {
        sendEnail();
        alert("Formulário enviado com sucesso!");
        // Se todos os campos estiverem preenchidos
        form.submit();
    }
    
});


// Eventos de blur
nameInput.addEventListener('blur', () => {
    checkInputName();
});

emailInput.addEventListener('blur', () => {
    checkInputEmail();
});

messageTextArea.addEventListener('blur', () => {
    checkTextareaMessage();
});


// funcao que valçida o campo nome
function checkInputName(name) {

    if (name === "") {
        errorInput(nameInput, "O campo nome é obrigatório!");
        return;
    }
    else 
    {
        const formItem = nameInput.parentElement;

        const textMessage = formItem.querySelector("a");

        textMessage.innerText = "";
   
        formItem.className = "form-section";
    }

    if( name.length < 3 || !validateName(name) ) {
        errorInput(nameInput, "Por favor, preencha campo nome corretamente!");
        return;
    }
    else 
    {
        const formItem = nameInput.parentElement;

        const textMessage = formItem.querySelector("a");

        textMessage.innerText = "";
   
        formItem.className = "form-section";
    }
}


// função que valida o campo email
function checkInputEmail(email) {

    if(email === "") { 
        errorInput(emailInput, "O campo email é obrigatório!");
        return;
    }
    else 
    {
        const formItem = emailInput.parentElement;

        const textMessage = formItem.querySelector("a");

        textMessage.innerText = "";
   
        formItem.className = "form-section";
    }

    if (email.length < 6 || !validateEmail(email)) {
        errorInput(emailInput, "Por favor, preencha campo email corretamente!");
        return;
    }
    else 
    {
        const formItem = emailInput.parentElement;

        const textMessage = formItem.querySelector("a");

        textMessage.innerText = "";
   
        formItem.className = "form-section";
    }
}

// função que valida o campo messagem
function  checkTextareaMessage(message) {
    if (message === "") {
        errorTextArea(messageTextArea, "O campo messagem é obrigatório!");
        return;
    }
    else {
        const formItem = messageTextArea.parentElement;

        const textMessage = formItem.querySelector("a");

        textMessage.innerText = "";
   
        formItem.className = "form-section";
    }

    if ( message.length < 3) {
        errorTextArea(messageTextArea, "Por favor, preencha campo messagem corretamente!");
        return;
    }
    else {
        const formItem = messageTextArea.parentElement;

        const textMessage = formItem.querySelector("a");

        textMessage.innerText = "";
   
        formItem.className = "form-section";
    }

}


// função que verifica email
function validateEmail(email) {
    const emailRegex = new RegExp(
        /^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}



function validateName(name) {
    const nameRegex = new RegExp(
        /^[a-zA-Z ]{3,}$/
    );

    if (nameRegex.test(name)) {
        return true;
    }

    return  false;
}


// Funcao que exibe mensagens de erro
function errorInput(input, message) {
    const formItem = input.parentElement;

    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
   
    formItem.className = "form-section error";
}

function errorTextArea(textarea, message) {
    console.log(textarea);

    const formItem = textarea.parentElement;

    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
   
    formItem.className = "form-section error";
}

// funcao que envia email
function sendEnail() {
    (function(){
        emailjs.init("w8FICXP1OUNY-GUlE");
    })();

    var params = {
        from_name: nameInput.value,
        email: emailInput.value,
        message: messageTextArea.value
    }

    var service_id = "service_iirl1kr";
    var template_id = "template_v651crh";

    emailjs.send(service_id, template_id, params)
    .then(res => {
        console.log('SUCCESS!');
    })
    .catch(error => {
        console.log('FAILED...', error);
    });
}