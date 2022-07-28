console.log("\n Trabalhando com loops");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);
 
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3) {
    if(listaDeDestinos[contador] == destino) {
        console.log(`Seu destino é ${listaDeDestinos[contador]}`);
        destinoExiste = true;
        break;
    } 
    contador++;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa Viagem!!");
} else {
    console.log("Desculpa tivemos um erro");
}

for(let cont = 0; cont < 3; cont++) {
    if(listaDeDestinos[contador] == destino) {
        console.log(`Seu destino é ${listaDeDestinos[contador]}`);
        destinoExiste = true;
    } 
}


