let idade = 21
let CNH = true

console.log(idade > 25)
console.log(idade == 21)
console.log(idade != 20)

console.log(idade === '21')
console.log(idade == '21')

console.clear()

console.log(idade != '21')
console.log(idade !== '21')

const possoDirigir = idade >= 18 && CNH === true

console.log('Posso dirigir?', possoDirigir)

/*
AND - &&
OR - ||
NOT - !
*/