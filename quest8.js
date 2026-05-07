const prompt = require("prompt-sync")();

let nomesVendedores = ["Ana", "Lucas", "Pedro", "Maria", "Julia"];
let totalVendas = [5000, 7000, 2000, 9000, 3000];

let soma = 0;

for(let i = 0; i < totalVendas.length; i++){
    soma += totalVendas[i];
}

let media = soma / totalVendas.length;

let maiorVenda = totalVendas[0];
let vendedorDestaque = nomesVendedores[0];

for(let i = 0; i < totalVendas.length; i++){

    if(totalVendas[i] > maiorVenda){
        maiorVenda = totalVendas[i];
        vendedorDestaque = nomesVendedores[i];
    }
}

console.log("Média de vendas:", media);
console.log("Vendedor destaque:", vendedorDestaque);

console.log("Abaixo da meta:");

for(let i = 0; i < totalVendas.length; i++){

    if(totalVendas[i] < media * 0.7){
        console.log(nomesVendedores[i]);
    }
}