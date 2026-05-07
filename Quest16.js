const prompt = require('prompt-sync')();
let grupo = [];
let soma = 0;
for (let i = 0 ; i <5; i++){
    let nome = prompt(`Digite o nome da ${i + 1} pessoa: `);
    let idade = Number(prompt(`Digite a idade da ${i + 1} pessoa: `));

 let pessoa = { nome, idade };
    grupo.push(pessoa);
     soma +=idade;
}
let media = soma / grupo.length; 

let maisvelho = grupo[0];
for (let i = 1; i < grupo.length; i++) {
    if (grupo[i].idade> maisvelho.idade) {
        maisvelho = grupo[i];
    }
}
console.log("media das idades:",media);
console.log("O mais velho é:",maisvelho.nome);

