const prompt = require('prompt-sync')();
let frota = [];
let soma = 0;
for (let i = 0 ; i <5; i++){
    let unidade = Number( prompt(`Digite o consumo (em Km/L) do ${i+1} caminhão: `));
    frota.push(unidade);
     soma +=unidade;
}
let media = soma / frota.length; 

let maiorconsumo = frota[0];
for (let i = 1; i < frota.length; i++) {
    if (frota[i] > maiorconsumo) {
        maiorconsumo = frota[i];
    }
}
let menorconsumo = frota[0];
for (let i = 1; i < frota.length; i++) {
    if (frota[i] < menorconsumo) {
        menorconsumo = frota[i];
    }
}
console.log("Melhor consumo registrado:",maiorconsumo);
console.log("Pior consumo registrado:",menorconsumo);
console.log("Média da frota:",media);
