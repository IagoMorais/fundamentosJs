// quando nao define nada o que ela retorna.
let a1 = 3;
function semRetorno(){
    console.log('Funçao foi chamada');
}

let a = 3;
let b = a * 7 + 10;
let c = semRetorno();
let d;// quando nao declara nada o resultado é underfined

console.log(a, b, c, d);