/*
&&  
|| sinbolo do paipe texto
| apenas um para binarios
!= sinbolo diferente  (tem o estreitamente diferente !== )

*/
let yMoney = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;


let resultadoE = ' #1 (AND) vai pro shopping? ';
resultadoE += yMoney && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = '#2 - (OR) vai pro shopping?' ;
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(true !== true);
console.log(false !== false);

console.log('Não verdadeiro:  '+ !true);
console.log('Não false: ' +!false);
