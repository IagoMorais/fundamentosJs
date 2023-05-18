const data1 = {
    dia: 05,
    mes: 09,
    ano: 1995,
    exibir: function () {
        return `Data de Nacimento;
    data: ${this.dia}
    mes: ${this.mes}
    ano: ${this.ano}`;
    }
};

const data2 = {
    dia: 05,
    mes: 09,
    ano: 1995,
    exibir: function () {
        return `Data de Nacimento;
    data: ${this.dia}
    mes: ${this.mes}
    ano: ${this.ano}`;
    }
};

const data3 = {
    dia: 05,
    mes: 09,
    ano: 1995,
    exibir: function () {
        return `Data de Nacimento;
    data: ${this.dia}
    mes: ${this.mes}
    ano: ${this.ano}`;
    }
};
console.log(data1.exibir());
console.log(data2.exibir());
console.log(data3.exibir());