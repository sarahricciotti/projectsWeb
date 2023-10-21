function saudacao() {
    console.log('Seja bem-vindo(a)!')
}

saudacao()
saudacao()

console.log('---------------')

function saudacao(nome, curso) {
    console.log(`${nome} seja bem-vindo(a)! ao curso de ${curso}`)
}

saudacao('Sarah', 'JavaScript')

function saudacao2(nome, curso2='JS') {
    console.log(`${nome} seja bem-vindo(a)! ao curso de ${curso2}`)
}

saudacao2('Sarah')

console.log('---------------')

function soma(num1, num2) {
    return num1 + num2
}

const resutado = soma(10, 5)

console.log(resutado / 2)
