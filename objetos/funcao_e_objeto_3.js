//Funçao construtura acionar essa funçao -> objeto ou nova class.
function Data(dia = 1, mes = 1, ano = 2013) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function () {
        return `Data de Nacimento;
        data: ${this.dia}
        mes: ${this.mes}
        ano: ${this.ano}`;
    }
}

const d1 = new Data();//pode tirar os () parametro 
d1.ano = 200; 

const d2 = new Data(2, 12, 2233);
const d3 = new Data(3, 3, 2023);

console.log(d1);
console.log(d2);
console.log(d3);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

