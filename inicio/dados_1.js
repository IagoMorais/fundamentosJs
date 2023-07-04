let produtoCodigo = 1 ; //const variavel que nao pode ser mudada 
let nome = "CANETA";  
let q = 10;
let p = 6.4;
let imposto = 1.5;
let pfinal = p + imposto;
{
console.log(nome);
console.log(q);
console.log(p);
console.log(imposto);
console.log(pfinal);
}
{
    console.log(`
    O codigo do produto é : ${produtoCodigo} |
    O nome do produto é : ${nome} |
    A quantidade em estoque é : ${q} un |
    O preço do produto é : R$${p} |
    O imposto é : R$${imposto} |
    A soma do produto mais o imposto é : R$${pfinal}|`) 
}