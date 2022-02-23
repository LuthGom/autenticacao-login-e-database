const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const usuariosController = require('../src/controller/usuarioController');
app.use(express.json());

app.use((req, res, next) => {
    next()
})
app.use(cors())
usuariosController(app)
app.listen(port, () => {
    console.log(`Acessando em: http://localhost:${port}`)
})