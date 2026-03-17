const users = [{ 
    usuario: "adm",
    senha: "12345"
}];
document.getElementById("login").addEventListener("submit", function(event){
    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let encontrado = users.find(u=>u.usuario === usuario && u.senha === senha);

    if(encontrado){
        window.location.href = "../inicio/index.html"
    } else{
        alert('USER OU SENHA ERRADOS TENTE NOVAMENTE...')

    }

});
