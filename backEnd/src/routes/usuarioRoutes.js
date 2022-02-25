const usuarioController = require('../controllers/usuarioController')

module.exports = (app) => {
    app
    .get('/', usuarioController.listaTodosOsUsuarios)
    .post('/login', usuarioController.login)
}