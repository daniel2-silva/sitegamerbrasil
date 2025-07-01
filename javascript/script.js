document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formLogin");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        if (email === "" || senha === "") {
            alert("Preencha todos os campos!");
        } else {
            alert("Login realizado com sucesso!");
        }
    });
});

document.getElementById("verMais").addEventListener("click", function () {
    alert("Mais novidades em breve!");
});
