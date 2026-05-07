const maratona = [
    {nome: "fabio", medalha: "Ouro"},
    {nome: "malu", medalha: "Prata"},
    {nome: "caio", medalha: "Bronze"},
    {nome: "bia", medalha: "recebeu medalha de honra"},
    {nome: "luisa", medalha: "recebeu medalha de honra"},
];

for (let i = 0; i < maratona.length; i++) {
  if (i < 3) {
    console.log(`${maratona[i].nome} ganhou ${maratona[i].medalha}`);
  } else {
    console.log(`Participante ${maratona[i].nome} ${maratona[i].medalha}`);
  }
}