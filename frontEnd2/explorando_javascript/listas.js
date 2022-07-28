console.log("Trabalhando com listas");

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(listaDeDestinos);

listaDeDestinos.push(`Belo Horizonte`);
listaDeDestinos.push(`Curitiba`);

console.log(listaDeDestinos[4]);

listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);


