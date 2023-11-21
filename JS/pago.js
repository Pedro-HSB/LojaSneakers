function exibe() {
    iden = sessionStorage.getItem("iden")
    if (iden=="true") {
        produto = sessionStorage.getItem("produto")

        let info = document.getElementById("info")

        info.innerHTML += `
    <h2>compra efetuada com sucesso</h2>
    <p>seu ${produto} esta a caminho</p>
`
sessionStorage.clear()
        window.location.href = "../HTML/index.html";
    }
    else{

            window.location.href = "../HTML/comprar.html";

    }
    
}