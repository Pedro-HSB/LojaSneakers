
function cadastrar() {
    var username = document.querySelector('#username').value;
    var email = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;
    if (username == null || senha == null || email == null) {

    }
    if (localStorage.username == username || localStorage.email == email) {
        let info = document.getElementById("info")
        info.innerHTML += `<h2>usuario ou email nao disponiveis</h2>`
    }
    else{
        sessionStorage.username = username
        sessionStorage.email = email
        sessionStorage.senha = senha

        let info = document.getElementById("info")
        info.innerHTML += `<h2>cadastro bem sucedido</h2>`

        document.querySelector('#username').value = ""
        document.querySelector('#email').value = ""
        document.querySelector('#senha').value = ""

    }
}
