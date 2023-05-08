let nota = 1;

switch (Math.ceil(nota)) {
    case 10:
    case 9:
    case 8:
    case 7:
        console.log('parabens');
        break;
    case 6: case 5:
        console.log('recuperaçao');
        break;
    case 4: case 3: case 2: 
        console.log('reprovado');
        break;
        case 1: case 0:
            console.log('Muito reprovado')
            default:
                console.log('erro de nota') 
}
console.log('fim ');