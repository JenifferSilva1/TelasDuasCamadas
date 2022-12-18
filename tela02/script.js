const formulario = document.querySelector("form");
const botao  = document.querySelector("button");
const iemail = document.querySelector(".email");
const isenha = document.querySelector(".senha");

function botao(){

    window.location = "../tela01/index.html"
}


function cadastrar() {

    fetch("http://localhost:8080/logar",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        method:"POST",
        body: JSON.stringify({
            email: iemail.value,
            senha: isenha.value
           
        })
    })
    .then(function(res) {console.log(res)})
    .catch(function(res) {console.log(res)})
};

function limpar(){
    iemail.value = "",
    isenha.value = ""   
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    cadastrar();
    limpar();
    botao();
});
