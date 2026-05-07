
const prompt = require('prompt-sync')()

let temperaturas = []
let soma = 0

for (let i = 0; i < 7; i++) {

    let temp = Number(prompt(`Digite a temperatura do dia ${i + 1}: `))

    temperaturas.push(temp)
    soma += temp
}

let maior = temperaturas[0]
let menor = temperaturas[0]

for (let i = 0; i < temperaturas.length; i++) {

    if (temperaturas[i] > maior) {
        maior = temperaturas[i]
    }

    if (temperaturas[i] < menor) {
        menor = temperaturas[i]
    }
}

let media = soma / temperaturas.length

console.log(`Média: ${media}`)
console.log(`Maior temperatura: ${maior}`)
console.log(`Menor temperatura: ${menor}`)