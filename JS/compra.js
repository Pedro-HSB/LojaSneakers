

function comprar() {
    window.location.href = "../HTML/tenis.html";
}

function comprarTenis() {
    //const dados = JSON.parse(sessionStorage.getItem("bd"))
    //const dados = JSON.parse(sessionStorage.getItem("bd"))

    var selectp = document.querySelector('#cor');
    var cor = selectp.options[selectp.selectedIndex].value;

    var selectc = document.querySelector('#produto');
    var produto = selectc.options[selectc.selectedIndex].value;

    var selectt = document.querySelector('#tamanho');
    var tamanho = selectt.options[selectt.selectedIndex].value;

    if (id = sessionStorage.getItem("id")==null){
        id=1
    }else{
        id+=1
    }
    sessionStorage.produto=produto
    sessionStorage.cor=cor
    sessionStorage.tamanho=tamanho
    sessionStorage.id=id
}

function info() {
    const dados = JSON.parse(sessionStorage.getItem("compra"))
    let cor = document.querySelector("#cor").value
    let tamanho = document.querySelector("#tamanho").value
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].login == lg && dados[i].senha == sn) {
            // console.log(dados[i].id + ":" + dados[i].login + ":" + dados[i].senha)

            id = dados[i].id
            lg = dados[i].login
        }
    }
}

function infoExibeNew() {
    const dados = JSON.parse(sessionStorage.getItem("compra"))
    let lg = document.querySelector("#Login").value


    for (let i = 0; i < dados.length; i++) {
        if (dados[i].login == lg) {
            // console.log(dados[i].id + ":" + dados[i].login + ":" + dados[i].senha)

            id = dados[i].id
            lg = dados[i].login
            sn = dados[i].senha
            nome = dados[i].nome
            cpf = dados[i].cpf
            email = dados[i].email
        }
    }
    let info = document.querySelector("#info")

    clear()
}
function infoExibe() {
    const dados = JSON.parse(sessionStorage.getItem("compra"))
    let cor = document.querySelector("#cor").value
    let tamanho = document.querySelector("#tamanho").value


    for (let i = 0; i < dados.length; i++) {
        if (dados[i].login == lg && dados[i].senha == sn) {
            // console.log(dados[i].id + ":" + dados[i].login + ":" + dados[i].senha)

            id = dados[i].id
            lg = dados[i].login
        }
    }
    let info = document.querySelector("#info")
    clear()
}



function removerID(id, arr) {
    return arr.map(function (obj) {
        if (obj.id != id) return obj;
        else return false;
    }).filter(Boolean);
}


