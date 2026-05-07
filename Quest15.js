const prompt = require('prompt-sync')();
let consertos = [];
let soma = 0;
for (let i = 0 ; i <4; i++){
    let consertinho = Number( prompt(`Digite o custo do ${i+1} conserto (em R$): `));
    consertos.push(consertinho);
     soma +=consertinho;
}
let media = soma / consertos.length; 

let maiscaro = consertos[0];
for (let i = 1; i < consertos.length; i++) {
    if (consertos[i] > maiscaro) {
        maiscaro = consertos[i];
    }
}
console.log("Custo total:",soma,"R$");
console.log("O mais caro foi:",maiscaro,"R$");
console.log("Média dos consertos:",media,"R$");
