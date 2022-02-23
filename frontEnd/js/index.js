const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha')
const submitButton = document.querySelector('button')

const login = { usuario: usuario.value, senha: senha.value }

const submit = () => {
    const loginRequest = () => {
        fetch(`https://autenticacao-login.herokuapp.com/login`, {
            method: "POST",
            body: JSON.stringify(login),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://autenticacao-login.herokuapp.com/login"
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                // localStorage.setItem("Cliente", JSON.stringify(data));
                console.log(data);
            })
            .catch((err) => console.log(err));
    }
    loginRequest()
}
submitButton.onclick = (e) => {
    e.preventDefault()
    submit();
}