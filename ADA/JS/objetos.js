let eu = {
    nome: 'Sarah',
    'nome-completo': 'Sarah Santos Ricciotti',
    idade: 21,
    altura: 1.70,
}

console.log(eu.nome)
console.log(eu['nome-completo'])
console.log(eu.idade)

console.log('---------------')

eu.profissao = 'Desenvolvedora Front-End'

console.log(eu.profissao)

console.log('---------------')

delete eu.nome

console.log(eu)

console.log('---------------')

for (let chave in eu) {
    console.log(chave)
}