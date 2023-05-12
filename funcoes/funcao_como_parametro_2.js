function executar(fn, n1 = 10, n2=10) {//valor padrao pasado
    if (typeof fn === "function") {
        console.log(fn(n1, n2));
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

executar(somar, 90, 50);
executar(multiplica, 90, 50);
executar(subtrair, 90, 50);
executar(somar);