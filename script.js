function fazerLogin() {
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if (email == "" || email == null || senha == "" || senha == null) {
        alert("Email ou senha inválidos")
    }
    else if (email !== "" && senha !== "") {
        alert("Login autoriazdo com sucesso!")
        window.location.href = "index.html" // muda a localização da página/faz navegação
    }
    else{
        alert("Usário inexistente")
    }
}

document.addEventListener("keypress" , (ev) =>{// add observador q detecta se foi pressionada
    if(ev.key == 'Enter'){ //se a tecla pressionada for ENTER
        fazerLogin()// faz o LOGIN
    }
})