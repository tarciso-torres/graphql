const { usuarios, perfis } = require('../data/db');

module.exports = {
    ola() {
        return 'Boa tarde!'
    },
    horaAtual() {
        return `${new Date().toLocaleTimeString()}`
    },
    usuarioLogado() {
        return {
            id: 1234,
            nome: 'Sabrina Peidonilda',
            email: 'bina-peidona@teste.com',
            idade: '35',
            salario: 15000.12,
            vip: false
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Salsichão',
            preco: 12.54,
            desconto: 0.50
        }
    },
    numeroMegaSena() {
        const crescente = (a, b) => a -b;
        return Array(6).fill()
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente);
    },
    retornaUsuarios() {
        return usuarios;
    },
    usuario(_, { id }){
        const selecionados = usuarios
            .filter(u => u.id === id);
        return selecionados ? selecionados[0] : null
    },
    perfis() {
        return perfis;
    },
    perfil(_, { id }) {
        const selecionado = perfis
            .filter(p => p.id === id);
        return selecionado ? selecionado[0] : null
    }
}