document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Aqui você pode adicionar lógica para enviar o formulário para o servidor
        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Mensagem:", message);

        // Exemplo de alerta de envio
        alert("Formulário enviado com sucesso!");

        // Limpar os campos do formulário após o envio
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });
});
