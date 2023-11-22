function exibe() {
    username=sessionStorage.username
    email=sessionStorage.email
    senha=sessionStorage.senha

    let info = document.getElementById("info")
    info.innerHTML += `
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">username</th>
                            <th scope="col">email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">${username}</th>
                            <td>${email} </td>
                            </tr>
                        </tbody>
                        </table>                        
`
}