const prompt = require('prompt-sync')();
let nome = [];
let quantidade = Number(prompt("Quantos nomes nessa lista? "));
for (let i = 0 ; i <quantidade; i++){
    let pessoa = prompt(`Digite o nome do ${i+1} convidado: `);
    nome.push(pessoa);
}

if (nome.indexOf("Ricardo")!=-1){
    console.log("Ricardo esta na lista");
}else{
console.log("Ricardo não esta na lista")
}