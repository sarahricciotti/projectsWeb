let nota;
let soma = 0

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`NOTA 1: ${i} `))

    soma = soma + nota
}

console.log(soma)