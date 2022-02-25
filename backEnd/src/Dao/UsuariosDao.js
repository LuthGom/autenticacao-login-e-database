const bdConexao = require('../infra/conexao')

class UsuariosDao {
    static buscaPorUsuario(usuario) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM usuarios_magalu WHERE usuario = ?`
            bdConexao.query(sql, usuario, (erro, retorno) => {
                if (erro) {
                    return reject({"mensagem": erro.message,
                    "erro": true})
                } else {
                    return resolve({retorno})
                }
            })
        })
    }
}

module.exports = UsuariosDao;