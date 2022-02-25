const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const routes = require('./routes/usuarioRoutes')
const conexao = require('./infra/conexao')
app.use(express.json());

app.use((req, res, next) => {
    next()
})
app.use(cors())

conexao.connect(function (erro) {
    if (erro) { throw erro; }
    else {
        routes(app)
        app.listen(port, () => {
            console.log(`Conectado! Acessando em: http://localhost:${port}`)
        })
    }
})