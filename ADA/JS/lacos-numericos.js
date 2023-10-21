const input = require('readline-sync')

/*
// PROBLEMA

const nota1 = Number(input.question('Nota 1: '))
const nota2 = Number(input.question('Nota 2: '))
const nota3 = Number(input.question('Nota 3: '))

let media = (nota1 + nota2 + nota3) / 3

// ACUMULADOR

let acumulador = 0

acumulador += 2
// acumulador -= 2

acumulador += 4

acumulador ++
// soma 1

console.log(acumulador)

// ESTRUTURA

for (let i = 0; i < 6; i += 2) {
    console.log('EX1', i)
}

for (let i = 0; i < 6; i ++) {
    console.log('EX2',i)
}

for (let i = 13; i > 6; i --) {
    console.log('EX3',i)
}
*/

// RESOLVENDO O PROBLEMA DA MEDIA

let nota;
let soma = 0

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`NOTA ${i}: `))

    soma = soma + nota
}

let media = soma / 3

console.log(`SOMA DE NOTAS: ${soma} E A MEDIA: ${soma / 3}`)