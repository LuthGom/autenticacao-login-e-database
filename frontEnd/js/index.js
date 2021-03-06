const usuario = document.getElementById('usuario')
const senha = document.getElementById('senha')
const submitButton = document.querySelector('button')
const mensagemDeErro = document.getElementById('erro')
const autenticacaoDeLogin = submitButton.addEventListener('click', function submit(e) {
    e.preventDefault();
    const login = { usuario: usuario.value, senha: senha.value }
    const loginRequest = () => {
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            body: JSON.stringify(login),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        })
            .then((resp) => resp.json())
            .then((database) => {
                validaDados(login, database,)
            })
            .catch((err) => console.log({ testandoErro: err }));
    }
    loginRequest()
})
function redirecionaPagina(outraPagina) {
    location.replace(outraPagina)
}

function validaDados(inputs, data) {
    if (inputs.usuario === data.usuario && inputs.senha === data.senha) {
        location.replace('frontEnd/html/bemVindo.html')
    } else {
   
        erro.innerHTML = `
        <p>usuario ou senha incorretos!
        `
        erro.style.color = 'white';
        erro.style.textAlign = 'center'
    } 
}