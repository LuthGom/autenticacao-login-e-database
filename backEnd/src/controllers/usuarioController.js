const Usuarios = require('../model/Usuarios');
const bd = require('../infra/conexao')
class usuarioController {
    static listaTodosOsUsuarios(req, res) {
        try {
            res.status(200).json({
                usuario: 'magalu',
                senha: 'm@galu123'
            });
        } catch (erro) {
            res.status(500).json({ erro: erro.message })
        }
    }
    static async login(req, res) {
        try {
            const { usuario, senha } = req.body;
            const buscaUsuario = await Usuarios.buscaPorUsuario(usuario)
            const login = buscaUsuario.retorno[0]
          
            if (usuario === login.usuario && senha === login.senha) {
                return res.status(200).json({usuario, senha})
            }
            else {
                return res.status(400).json('usuario ou senha incorretos')
            }
        } catch (erro) {
            return res.status(500).json({ erro: erro.message, erro: true })
        }
    }

}

module.exports = usuarioController;