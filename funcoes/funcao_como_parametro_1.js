function executar(param){
    if(typeof param === "function"){
        console.log(param());  // <--- Central do conceito como parametros 
   }
}
function bomDia(){
    return "Bom Dia ";
}

executar (3);  //console.log(typeof executar === "function")
executar(bomDia); // <--- Central do conceito como parametros 

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);