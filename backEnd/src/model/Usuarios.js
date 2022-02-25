const Validacao = require('../services/Validacao');
const UsuarioDao = require('../Dao/UsuariosDao');
class Usuario {
    static cadastroDeUsuarios(usuario, senha) {
        const validaUsuario = Validacao.validacaoUsuario(usuario);
        const validaSenha = Validacao.validacaoSenha(senha);

        if(!validaUsuario || !validaSenha) {
            throw new Error('usuário ou senha incorretos!')
        }
        return validaUsuario && validaSenha;
    }
    static listarTodosOsUsuarios() {
        return UsuarioDao.listaTodosOsUsuarios();
    }
    static async buscaPorUsuario(usuario) {
        const buscaUsuario = await UsuarioDao.buscaPorUsuario(usuario);
        if(!usuario) {
            return 'não encontrado!'
        }
        return buscaUsuario
    }
}

module.exports = Usuario;