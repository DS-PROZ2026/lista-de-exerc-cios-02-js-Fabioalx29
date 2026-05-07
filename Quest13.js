const prompt = require('prompt-sync')();
let sensores = [];
let soma = 0;
let alertas = 0;
for (let i = 0 ; i <6; i++){
    let temperatura = Number( prompt(`Digite a temperatura registrada no ${i+1} sensor: `));
    sensores.push(temperatura);
     soma +=temperatura;
    if (temperatura > 35){
        alertas +=1

    }
}
let media = soma / sensores.length;

let maiortemp = sensores[0];
for (let i = 1; i < sensores.length; i++) {
    if (sensores[i] > maiortemp) {
        maiortemp = sensores[i];
    }
}
console.log("Maior temperatura registrada:",maiortemp);
console.log("Média das temperaturas:",media);
console.log("Alertas disparados:",alertas);
