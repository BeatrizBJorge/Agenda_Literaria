/* Login demonstrativo */
/*
function btnlog() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var usuario_passou = (usuario == 'admin');
    var senha_passou = (senha == 'senha');

    if (usuario_passou && senha_passou) {
        window.alert('Login bem-sucedido! Redirecionando...');
        window.location.replace("../mainPage/mainpage.html");
    } else {
        window.alert("Credenciais inválidas. Tente novamente.");
    }
}*/

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    //obter os valores de usuario e senha
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    //validação do login para demonstração

    // se o usuario e senha estiverem corretos, vai avançar para main page
    if (usuario === "Admin" && senha === "admin1") {
        swal("Login bem-sucedido!", "Redirecionando ...", "success")
            .then((value) => {
                window.location.replace("../mainPage/mainpage.html");
            });
    } else {
        swal("Usuario ou senha inválidos.", "Tente Novamente.", "error");
    }
})
