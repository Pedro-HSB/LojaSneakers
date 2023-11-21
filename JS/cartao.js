function cartao() {
    var titular = document.querySelector('.titular');
    var numero = document.querySelector('.numero');
    var validade = document.querySelector('.validade');
    var cvc = document.querySelector('.cvc');

    sessionStorage.titular = titular
    sessionStorage.numero = numero
    sessionStorage.validade = validade
    sessionStorage.cvc = cvc
    sessionStorage.iden = true

    //alert("cartao cadastrado")
    
}

function visualizar() {
    window.location.href = "../HTML/pago.html"
}




