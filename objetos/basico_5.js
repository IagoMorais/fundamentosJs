const cliente = {
    codigo: 16532,
    nome: 'ana',
    vip: true,
    endereco: {
        logradouro: 'rua abc',
        numero: 123,
        complemento: 'ap 101 bloco b',
        pontosRef: [
            {nome: 'hospitalx', muitoProximo: true},
            {nome: 'shopping y', muitoProximo: false},
        ]
    },
    nomeFilhos: ['bia', 'carlos', 'gabriel']
};

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0].muitoProximo);