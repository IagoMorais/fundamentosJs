function criarData(dia, mes, ano) {
    return {
        dia,
        mes,
        ano,
        exibir() {
            return `Data de Nacimento; 
            data: ${this.dia}  mes: ${this.mes} ano: ${this.ano}`;
        }
    }
};
const d1 = criarData(10, 2, 2021);
const d2 = criarData(10, 2, 2022);
const d3 = criarData(10, 2, 2023);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());