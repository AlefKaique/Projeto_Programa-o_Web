function Login() {
    const emailCaixaTexto = document.getElementById('email').value;
    const senhaCaixaTexto = document.getElementById('password').value;
    const messageContainer = document.getElementById('message-container');

    if (!emailCaixaTexto || !senhaCaixaTexto) {
        showMessage('Preencha todos os campos.', 'error');
        return;
    }

    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        const users = JSON.parse(storedUsers);
        const userFound = users.find(user => user.email === emailCaixaTexto && user.password === senhaCaixaTexto);

        if (userFound) {
            showMessage('Login realizado com sucesso!', 'success');
            window.location.href = 'ClubeDeEsportes.html';
            return;
        }else {
            showMessage('Email ou senha Inválidos!');
            return;
        }
    }
}

function showMessage(message, type = 'success') {
    const messageContainer = document.getElementById('message-container');
    if (messageContainer) {
        messageContainer.textContent = message;
        messageContainer.className = ''; 
        messageContainer.classList.add(type, 'show');
        messageContainer.style.display = 'block';

        setTimeout(() => {
            messageContainer.classList.remove('show');
            messageContainer.style.display = 'none';
        }, 3000);
    } else {
        alert(message); 
    }
}