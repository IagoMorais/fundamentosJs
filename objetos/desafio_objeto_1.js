const data = {
    dia: 05,
    mes: 09,
    ano: 1995,
    exibir: function () {
        return `Data de Nacimento;
    data: ${data.dia}
    mes: ${data.mes}
    ano: ${data.ano}`;
    }
};

data.ano = 2013;

console.log(data.exibir());
/*(`data: ${data.dia}
mes: ${data.mes}
ano: ${data.ano}`);*/