const users = [{ 
    usuario: "adm",
    senha: "12345"
}];
document.getElementById("login").addEventListener("submit", function(event){
    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let encontrado = users.find(u=>u.usuario === usuario && u.senha === senha); /*find() significa procurar algo dentro da lista. Aqui u representa cada usuário da lista. u.usuario === usuario. Aqui ele compara:*/

    if(encontrado){
        window.location.href = "../inicio/index.html" /*window representa a janela do navegador E location representa o endereço da página (URL).*/ 
    } else{
        alert('USER OU SENHA ERRADOS TENTE NOVAMENTE...')

    }

});
