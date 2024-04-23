/* Olho que mostra a senha */ /*
document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.bi-eye-fill');
    let input = document.querySelector('.senha input[type="password"]');

    btn.addEventListener('click', function() {
        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text');
        } else {
            input.setAttribute('type', 'password');
        }
    });
});*/

document.getElementById("cadastroForm").addEventListener("submit", function(event){
    event.preventDefault();

    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    //validacao do cadastro
    //validacao do cadastro
    if (nomeCompleto === "isso é um exemplo" && dataNascimento === "2000-01-25" && username === "Admin" && email === "admin@exemplo.com" && senha === "admin1" && confirmarSenha === "admin1") {
        swal("Cadastro bem-sucedido!", "Redirecionando ...", "success")
            .then((value) => {
                window.location.replace("../mainPage/mainpage.html");
            });
    } else {
        swal("Por favor, preencha todos os campos corretamente!", "", "error");
    }
    

});


// Olho para visibilidade de senha
document.querySelector(".fa-eye").addEventListener("click", togglePasswordVisibility());

function togglePasswordVisibility(){
    var passwordInput = document.getElementById("senha");
    var passwordToggle = document.querySelector(".fa-eye");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.classList.remove("fa-eye");
        passwordToggle.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        passwordToggle.classList.remove("fa-eye-slash");
        passwordToggle.classList.add("fa-eye");
    }

}
