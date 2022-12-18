const btn = document.querySelector("#btn");
const inome = document.querySelector(".nome");
const ilocal = document.querySelector(".local");
const ifeadbeek = document.querySelector("#feadbeek");
const imodoAtuacao = document.forms.modoAtuacao


function botao(){

    window.location = "../tela05/index.html"
}

btn.addEventListener('click', (event) => {
    event.preventDefault();

    let checkboxes = document.querySelectorAll('input[name="especialidade"]:checked');
    const valor = [];
    checkboxes.forEach((checkbox) => {
        valor.push(checkbox.value);
    });

    function trabalhoParser(payload) {
        return {
            ...payload,
            especialidade: JSON.parse(payload.especialidade)
        }
    }

    function showFeadbeek() {
        ifeadbeek.classList.add("show")
    }

    function cadastrar() {

        const body = JSON.stringify({
            nome: inome.value,
            modotrabalho: imodoAtuacao.value,
            localA: ilocal.value,
            especialidade: JSON.stringify(valor)
        })


        console.log("body" + body);


        fetch('http://localhost:8080/atuacao',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body
            })
            .then(async function (res) { console.log(trabalhoParser(await res.json())); showFeadbeek() })
            .catch(function (res) { console.log(res) })

    };



    cadastrar();
    botao();

});