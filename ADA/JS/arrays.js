/*
let  array = ['Sarah', 21, 1.70, true]

console.log(array)

console.log('---------------')

console.log('1º elemento:', array[0])
console.log('2º elemento:', array[1])

console.log('---------------')

// TAMANHO | QTD DE ELEMENTOS

console.log(array.length)

// PERCORRENDO O ARRAY

console.log('---------------')

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

console.log('---------------')

for (let elemento of array) {
    console.log(elemento)
}

console.log('---------------')

for (let indice in array) {
    console.log(indice, array[indice])
}
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let  array2 = [15, 5, 20, 10, 30, 5]
let array3 = []

console.log(array2.slice(0, 2))
// 1 não é incluído, pois pega menor que o 2º número

console.log(array2.slice(2))
// pega do elemento 0 até o elemento 2

console.log('---------------')

console.log(`Antes: ${array3}`)

array3.push(5, 7, 9)
array3.push(12)
// adiciona no final
array3.unshift(3)
// adiciona no começo

console.log(`Depois: ${array3}`)

console.log('---------------')

console.log(`Antes de remover: ${array3}`)

// array3.pop()
// remover o último

const removido = array3.pop()

console.log(`Depois de remover: ${array3}`)
console.log(`Elementos removido: ${removido}`)

console.log('---------------')

console.log(`Antes de remover: ${array3}`)

// array3.shift()
// remover o primeiro

const removido2 = array3.shift()

console.log(`Depois de remover: ${array3}`)
console.log(`Elementos removido: ${removido2}`)

console.log('---------------')

console.log('array2', array2)
console.log('array3', array3)

console.log(array3.concat(array2))

console.log('---------------')

console.log(array2)

let indiceElem20 = array2.indexOf(20)
// se tiver um elemento repetido, traz o indice do 1º

console.log(indiceElem20)
// se trouxer -1 é porque o elementos não existe dentro do ARRAY

let indiceElem5 = array2.lastIndexOf(5)
// se tiver um elemento repetido, traz o indice do último

console.log(indiceElem5)

console.log('---------------')

console.log(array2)

console.log(array2.includes(16))
// pesquisa se o elemento declarado tem incluso na ARRAY

console.log('---------------')

console.log('Normal:', array3)

const invertido3 = array3.reverse()

console.log('Invertido:', invertido3)

