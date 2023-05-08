// quando nao define nada o que ela retorna.
function semRetorno(){
    console.log('Funçao foi Chamada');
}

let a = 3;
let b = a * 7 + 10;
let c = semRetorno();
let d;// quando nao declara nada o resultado é underfined

console.log(a, b, c, d);