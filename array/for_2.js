const notas = [7, 8, 3, 5, 10, 9, 8, 8];

let valores = ' ';
// foreach 
//codigo simplificado

for(let nota of notas) {//para acesar cada um dos elementos (valores) 
    valores += nota + ' ';
}
console.log(valores);

let indices = ' ';

//para acessar os indice (0,x)
for(let indice in notas) {
    indices += indice + ' ';
}

console.log(indices);