const prompt = require('prompt-sync')();
let viagens = [];
let soma = 0;
let viagembarata = 0;
for (let i = 0 ; i <10; i++){
    let destino= prompt(`Digite o ${i + 1} destino: `);
    let passagem= Number(prompt(`Digite o valor da ${i + 1} passagem: `));
    if (passagem<1000){
        viagembarata+=1;
    }
    let hospedagem = Number(prompt(`Digite o valor da hospedagem e hotel da ${i + 1} viagem: `))

 let viagem = { destino,passagem,hospedagem };
    viagens.push(viagem);
     soma +=passagem;
}
let media = soma / viagens.length; 

let maiscaro= viagens[0];
for (let i = 1; i < viagens.length; i++) {
    if (viagens[i].passagem> maiscaro.passagem) {
        maiscaro = viagens[i];
    }
}
console.log("Valor da média das passagens:",media);
console.log("A mais cara é:R$",maiscaro.passagem,);
console.log("Viagens a menos de 1000 reais:",viagembarata);

