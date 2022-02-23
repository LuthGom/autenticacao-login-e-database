const bd = require('../infra/bd');

class UsuariosDao {
    static listarTodosOsUsuarios() {
        return new Promise((resolve, reject) => {
            bd.all(
                `SELECT`
            )
        })
    }
}