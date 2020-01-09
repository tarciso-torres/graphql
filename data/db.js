const perfis = [
    {
        id: '1',
        nome: 'Comum'
    },
    {
        id: '2',
        nome: 'Administrador'
    }
];


const usuarios = [
    {
        id: '1',
        nome: 'Tarciso Torres',
        email: 'tarciso@test.com',
        idade: 33,
        salario: 5500.00,
        vip: true,
        perfil_id: '1'
    },
    {
        id: '2',
        nome: 'Sabrina Torres',
        email: 'sabrina@test.com',
        idade: 32,
        salario: 12000.32,
        vip: true,
        perfil_id: '2'
    },
    {
        id: '3',
        nome: 'João Batista',
        email: 'joao@test.com',
        idade: 23,
        salario: 3500.21,
        vip: false,
        perfil_id: '1'
    }
];

module.exports = { usuarios, perfis }