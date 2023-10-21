const input = require('readline-sync')

const num = 21

let numero = Number(input.question('Uma pessoa que nasceu em 2002, hoje ela teria quantos anos? '))

console.log(numero, typeof numero)

if (num === numero) {
    console.log('correto')
} else {
    console.log('incorreto')
}

while (num !== numero) {
    console.log('Incorreto, tente novamente')
    numero = Number(input.question('Uma pessoa que nasceu em 2002, hoje ela teria quantos anos? '))
}

console.log('Correto!')