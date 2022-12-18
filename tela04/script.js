const btn = document.querySelector("#btn");
const ibibiografia = document.querySelector("#bibiografia");
const ifeadbeek = document.querySelector("#feadbeek");
const ilocal = document.forms.local

function botao(){

    window.location = "../Projeto-main/index.html"
}


btn.addEventListener('click', (event) => {
    event.preventDefault();

    let checkboxes = document.querySelectorAll('input[name="trabalho"]:checked');
    const unha = [];
    checkboxes.forEach((checkbox) => {
        unha.push(checkbox.value);
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
            bibiografia: ibibiografia.value,
            localC: ilocal.value,
            especialidade: JSON.stringify(unha)
        })


        console.log("body" + body);


        fetch('http://localhost:8080/trabalho',
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