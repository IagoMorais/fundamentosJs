//#1: Função COM Parâmetro e COM Retorno
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`O reultado final é: ${resultado}`);
console.log(`O resultado final é : ${somar(30, 56)}`);

//#2: Função COM Parâmetro e SEM Retorno
function exibirMuktiplicacao(a, b){
    console.log(a*b);
}

exibirMuktiplicacao(10, 21);
exibirMuktiplicacao(7, 9);

// #3 funçao SEM parâmetros e COM retorno
function retornarDataAtual(){
    return new Data();
}

//#4 Função SEM Parâmetros e SEM Retorno
function exibirHoraAtual(){
    console.log(new Date().getHours());
}

exibirHoraAtual();