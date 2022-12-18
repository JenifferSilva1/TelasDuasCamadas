const formulario = document.querySelector("form");
const ibotao  = document.querySelector("button");
const iemail = document.querySelector(".email");
const isenha = document.querySelector(".senha");
const icofsenha = document.querySelector(".confirmarsenha");



function cadastrar() {

    if (isenha.value == icofsenha.value) {

        fetch("http://localhost:8080/usuarios",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            method:"POST",
            body: JSON.stringify({
                email: iemail.value,
                senha: isenha.value,
                cofsenha: icofsenha.value
            })
        })
        .then(function(res) {console.log(res)})
        .catch(function(res) {console.log(res)})

        
    }else{
        alert("As senhas não são identicas")
    }

   
};

function botao(){

    window.location = "../tela04/index.html"
}

function limpar(){
    iemail.value = "",
    isenha.value = "",
    icofsenha.value = ""
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    cadastrar();
    limpar();
    botao();
});
