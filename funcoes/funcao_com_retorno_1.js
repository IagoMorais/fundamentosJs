//return retorna algo
function sempreRetornaUm() {
return 1000;// nada depois sera executado 
}

function textoOuNumero(retornaTexto){
    return retornaTexto ? "Sou texto!" : 123;
}

let valor = sempreRetornaUm() + 999;
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));