// const Usuarios = require('../model/Usuarios');
const bd = require('../infra/bd')
console.log(bd);
module.exports = (app) => {
    app
        .get('/', async (req, res) => {
            try {
                // const listaDeUsuarios = await Usuarios.listarTodosOsUsuarios();
                res.status(200).json({
                    usuario: 'magalu',
                    senha: 'm@galu123'
                });
            } catch (erro) {
                res.status(500).json({ erro: erro.message })
            }
        })
        .post('/login', (req, res) => {
            try {
                const {usuario, senha} = req.body;
                // console.log(bd.usuario, bd.senha);
                console.log(usuario, senha);
                if(usuario === bd.usuario && senha === bd.senha) {
                    return res.status(200).json({usuario, senha})
                }
                //  else {
                //     return res.status(500).json('usuario ou senha incorretos')
                // }
            } catch (erro) {
                console.log(erro);
                return res.status(500).json({erro: erro.message})
            }
        })

}