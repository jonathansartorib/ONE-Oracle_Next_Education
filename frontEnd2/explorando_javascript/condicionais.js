console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possiveis:");
console.log(listaDeDestinos);
 
/*
if (idadeComprador >= 18) {
    console.log("Comprador maior de Idade")
    listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada) {
    console.log("Comprador está acompanhado")
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador menor de idade, não posso vender");
}

console.log(listaDeDestinos);
*/

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de Idade ou acompanhado")
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador menor de idade e desacompanhado, não posso vender");
}

console.log("Embarque: \n\n");

if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!!!!")
} else {
    console.log("Infelizmente voçê não pode embarcar");
}

console.log(listaDeDestinos);

 