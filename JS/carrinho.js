
function infoExibe() {
    produto = sessionStorage.getItem("produto")
    cor = sessionStorage.getItem("cor")
    tamanho = sessionStorage.getItem("tamanho")
    id = sessionStorage.getItem("id")


    let i = 1;
    while (i > 0) {
            if(produto==null){
                let info = document.getElementById("info")
                info.innerHTML +=`<h2 class="center"> carrinho vazio</h2>`
                i--
            }else{
                mensagem(id, produto, tamanho, cor)
                i--
            }
        i--
    }

}
function mensagem(id, produto, tamanho, cor) {
    let info = document.getElementById("info")
    info.innerHTML += `
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">id</th>
                            <th scope="col">produto</th>
                            <th scope="col">tamanho</th>
                            <th scope="col">cor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">${id}</th>
                            <td>${produto} </td>
                            <td>${tamanho}</td>
                            <td>${cor}</td>
                            </tr>
                        </tbody>
                        </table>                        
`
}


function cancelar(id) {
    let num = document.getElementById("num").value
    //var dados = JSON.parse(sessionStorage.getItem("bd"))

    id = sessionStorage.getItem("id")
    for (let i = 0; i < id; i++) {
        if(num==id){
            sessionStorage.removeItem("id")
            sessionStorage.removeItem("produto")
            sessionStorage.removeItem("tamanho")
            sessionStorage.removeItem("cor")
            window.location.reload();
            break
        }
    }
}

function red() {
    let num = document.getElementById("num").value
    id = sessionStorage.getItem("id")
    if (num==null || id==null) {
        window.location.reload();
    }
    if (num >0 ){
        window.location.href = "../HTML/comprar.html"
    }
}