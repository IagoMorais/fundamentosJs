const numeros1 = [1, 2, 3, 4, 5, 6];

numeros1[3] = 100;
numeros1.push(7);

console.log(numeros1.indexOf(6));
console.log(numeros1.indexOf(1, 2));
console.log(numeros1.includes(10));
console.log(numeros1.includes(6));
console.log(numeros1.join(' * '));
console.log(numeros1);

const numeros2 = numeros1.concat(7, 8, 9);
console.log(numeros2);