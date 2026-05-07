const prompt = require('prompt-sync')();
let litros= [];
let soma = 0;
let maiorposi = 0
for (let i = 0 ; i <6; i++){
    let litroDia = Number( prompt(`Digite os litros gastos no ${i+1} dia: `));
    litros.push(litroDia);
}
for (let litro of litros){ 
     soma +=litro;
}
let maior = litros[0];
for (let i = 1; i < litros.length; i++) {
    if (litros[i] > maior) {
        maior = litros[i];
        maiorposi = i;
    }
}
media = soma/6
console.log("A soma da água usada é:",soma)
console.log("A maior quantidade de agua gasta em um dia foi:",maior,"no dia ",maiorposi);

