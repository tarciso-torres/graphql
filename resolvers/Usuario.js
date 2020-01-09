const { perfis } = require('../data/db');

module.exports = {
    perfil(usuario){
        const selecionado = perfis
            .filter(p => p.id === usuario.id);
        return selecionado ? selecionado[0] : null;
    }
}