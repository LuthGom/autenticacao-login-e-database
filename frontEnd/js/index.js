const usuario = document.getElementById('usuario')
const senha = document.getElementById('senha')
const submitButton = document.querySelector('button')
const autenticacaoDeLogin = submitButton.addEventListener('click', function submit(e) {
    e.preventDefault();
    const login = { usuario: usuario.value, senha: senha.value }

    // console.log(login)
    const loginRequest = () => {
        fetch(`https://autenticacao-login.herokuapp.com/login`, {
            method: "POST",
            body: JSON.stringify(login),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                //  validaDados(login, data)
            })
            .catch((err) => console.log({ testandoErro: err }));
    }
    loginRequest()
})
function redirecionaPagina(outraPagina) {
    location.replace(outraPagina)
}

function validaDados(login, data) {
    if (login === data) {
        console.log('login: ', login, 'data: ', data);
        location.replace('bemVindo.html')
    } else {
        console.log('erro');
    }
}