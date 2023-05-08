const hora = 22;
let saudacao;

if (hora < 12) {
    saudacao = 'bom dia ';
} else  if (hora < 18) {
        saudacao = 'bora tarde ';
} else if (hora < 22){
        saudacao = 'boa noite';
} else {
    saudacao = 'muito tarde';
}

console.log(saudacao)