const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const usuariosController = require('../src/controller/usuarioController');
app.use(express.json());
usuariosController(app)


app.use(cors())
app.listen(port, () => {
    console.log(`Acessando em: http://localhost:${port}`)
})