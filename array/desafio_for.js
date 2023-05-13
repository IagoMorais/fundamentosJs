const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = numeros.length - 1; i >= 0; i -= 1) { //para acessar de tras para frente de um em um
    console.log(numeros[i]);
}

for(let i = numeros.length - 2; i >= 0; i -= 2) { //para acessar de tras para frente de 2 em 2
    console.log(numeros[i]);
}