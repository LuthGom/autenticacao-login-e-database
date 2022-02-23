class Validacao {
    static validacaoUsuario(usuario) {
        const isValid = usuario.length >= 6;
        if (isValid) {
            return true;
        } else {
            return false;
        }
    }
    static validacaoSenha(senha) {
        const isValid = senha.length >= 9
        if (isValid) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Validacao;