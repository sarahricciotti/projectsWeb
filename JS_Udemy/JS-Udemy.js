document.write('<h3>variáveis</h3>') //////////////////////

let firstName = "Sarah ";
let lastName = "Ricciotti";

let name = firstName.concat(lastName, " is my name!");

let frase = `${firstName} ${lastName} ${"is my name and I\'m"} ${20 + 1} ${"year old."}`;

document.write(name + '</br>');

document.write(frase + '</br>');

document.write(Number.MAX_VALUE + ' = MAX_VALUE </br>'); //1.7976931348623157e+308

document.write(Number.MIN_VALUE + ' = MIN_VALUE </br>'); //5e-324


//document.write('<h3>objeto</h3>')

let carro1 = {
    rodas: 4,
    portas: 4,
    nome: "Picasso",
    aVenda: true
};

console.log(carro1)

carro1.aVenda = false; //troca de valores

console.log(carro1)


document.write('<h3>função</h3>') //////////////////////

let hi = function () {
    document.write("hi </br>");
    document.write("hi!! </br>");
    document.write("hi!!! </br>");
};

hi();

document.write('</br>') //////////////////////

let somar = function (valor1, valor2) {
    let resultado = valor1 + valor2;
    document.write(resultado + '</br>');
}

somar(1, 2);
somar(4, 12);
somar(18, 67);

document.write('</br>') //////////////////////

let somarReturn = function (value1, value2) {
    let resul1 = value1 + value2;
    document.write(resul1 + '</br>');
    return resul1;
}

somarReturn(4, 7);

document.write('</br>') //////////////////////

function revisao(valor1, valor2, valor3) {

    let outroValor = valor1 + 2;
    let maisUm = valor2 + valor3;

    let vetor = [valor3, valor1, maisUm, valor2, outroValor];

    document.write(`A soma de ${vetor[2]} está certa? Ou ${vetor[1] + 2} = ${vetor[4]} parece melhor?` + '</br>');
}

revisao(2, "5", "zero");

document.write('</br>') //////////////////////

let funcaoDeSomar = function (valor1, valor2) {
    let resultado = valor2 + valor1;
    document.write(resultado + '</br>');
    return resultado;
};

funcaoDeSomar(1, 3)
funcaoDeSomar(2, -5)

document.write('</br>') //////////////////////

let listaMista = [50, "mundo", true, { teste: "Testando" }];
document.write(listaMista + '</br>')

document.write('</br>') //////////////////////

let carro = {
    rodas: 4,
    portas: 2,
    cor: "cinza",
    ano: 2012,
    estado: "novo"
};

function mudarPropriedade(nomePropriedade, novoValor) {
    switch (nomePropriedade) {
        case "rodas":
            if (novoValor > 1) {
                carro.rodas = novoValor;
            }
            else {
                return "Minimo de rodas precisa ser 2";
            }
            break;
        case "portas":
            if (novoValor > 0) {
                carro.portas = novoValor;
            }
            else {
                return "Minimo de portas precisa ser 1";
            }
            break;
        case "cor":
            if (novoValor == "cinza" || novoValor == "preto" || novoValor == "vermelho") {
                carro.cor = novoValor;
            }
            else {
                return "Cor invalida";
            }
            break;
        case "ano":
            carro.ano = novoValor;

            if (novoValor == 2019) {
                carro.estado = "novo";
            }
            else {
                carro.estado = "usado";
            }
            break;
        default:
            return "Propriedade invalida";
    }
}

console.log(mudarPropriedade("rodas", 0));
console.log(mudarPropriedade("cor", "azul"));
console.log(mudarPropriedade("ano", 2016));

console.log(carro)

//////////////////////

function calcularArea(largura, comprimento1) {
    var area = largura * comprimento1

    return area
}

document.write('A area tem ' + calcularArea(10, 25) + ' metros quadrados </br>')

document.write('</br>') /////////////////////

function somaa(aa, bb){
    bb = bb === undefined ? 0 : bb
    return aa + bb
}

document.write(9)


document.write('<h3>if - else</h3>') //////////////////////

let myName = "Sarah";
let city = "SV";

if (myName == "Sarah") {
    document.write(myName + " is my name" + '</br>')
}

document.write('</br>') //////////////////////

if (myName == "Sarah") {
    document.write("Hi " + myName + '</br>')
} else {
    document.write("Who is you?" + '</br>')
}

document.write('</br>') //////////////////////

if (city == "SV") {
    document.write("Vicentina" + '</br>')
} else if (city == "SP") {
    document.write("Paulista" + '</br>')
}
else if (city != "SP") {
    document.write("Where are you from?" + '</br>')
}

document.write('<h3>switch</h3>') //////////////////////

let surname = "Ricciotti"

switch(surname){
    case "Ricciotti":
        document.write(surname + '</br>');
        break;
    case "Santos":
        document.write("surname is: " + surname + '</br>');
        break;
    default:
        document.write("unknown" + '</br>');
        break;
}

document.write('</br>') //////////////////////

let objetoServidor = {
    access: true,
    login: "SarahR"
};

let objetoServidor2 = {
    erro: "Error connecting to server"
};

function conexaoLogin(respostaServidor) {
    if(respostaServidor.erro == null){
        if(respostaServidor.access){
            document.write(`login: ${respostaServidor.login}` + '</br>');
        }else{
            document.write("Acesso Negado!" + '</br>');
        }
    }else{
        document.write(respostaServidor.erro + '</br>');
    }
}
/*
- A função começa verificando se a propriedade `erro` do objeto é `null`. Se for, isso significa que não houve erros de conexão.
- Em seguida, verifica se a propriedade `acess` do objeto é verdadeira. Se for, exibe uma mensagem de sucesso de login com o nome de usuário. Caso contrário, exibe uma mensagem de "Acesso Negado!".
- Se a propriedade `erro` não for `null`, significa que ocorreu um erro de conexão, então a função exibe a mensagem de erro contida na propriedade `erro`.
*/

let vetorNumero = [1, 2, 55, 60, 75, 5, 4];
let valor = 5;
let valor2 = 6;
const valorLimite = 50;


document.write('<h3>for</h3>') //////////////////////

for (let index = 0; index < vetorNumero.length; index++) {
    if (vetorNumero[index] > 20) {
        document.write(index, vetorNumero[index] + '</br>');
    }
}

document.write('</br>') //////////////////////

for (let i = 0; i < 4; i++) {
    document.write(i + '</br>');
}

document.write('</br>') //////////////////////

for (const item of vetorNumero) {
    if (item > 20) {
        document.write(item + '</br>');
    }
}


document.write('<h3>while</h3>') //////////////////////

while (valor < valorLimite) {
    document.write(valor + '</br>');
    valor = valor * 2;
}


document.write('<h3>do while</h3>') //////////////////////

do {
    document.write(valor2 + '</br>');
    valor2 = valor2 * 2;
} while (valor2 < valorLimite);


document.write('<h3>for of</h3>') //////////////////////

let alunos = [
    {
        nome: "Sarah",
        nota: 10
    },
    {
        nome: "Samara",
        nota: 8
    },
    {
        nome: "Rapha",
        nota: 7
    },
    {
        nome: "Fabio",
        nota: 5
    },
]


for (let aluno of alunos) {
    if (aluno.nota >= 7) {
        document.write(`${aluno.nome} = passou` + '</br>');
    } else {
        document.write(`${aluno.nome} = não passou` + '</br>');
    }
}


document.write('<h3>fibonacci</h3>') //////////////////////

function fibonacci(n) {
    if (n < 2) {
        return n;
    } //Se n for menor que 2, isso significa que n é 0 ou 1. Nesse caso, a função retorna n

    let posicao = 2;
    let anterior = 1;
    let penultimo = 0;

    while (true) {
        if (posicao == n) { //verificado se a posicao é igual a n
            return penultimo + anterior;
        } //a função retorna a soma de penultimo e anterior, que é o número na posição n

        let temp = penultimo;
        //é usada para armazenar temporariamente o valor de penultimo, para que ele não seja substituído antes de ser usado para atualizar anterior
        penultimo = anterior;
        anterior = temp + penultimo;
        posicao++;
    }
}

document.write(fibonacci(4) + '</br>');


document.write('<h3>soma e multiplicação de vetor</h3>') //////////////////////

let vetorr = [1, 5, 10, 20];
let numero = 2;

function calcularVetor(vetorr, numero) {
    for (let i = 0; i < vetorr.length; i++) {
        //estrutura de repetição for que percorre cada elemento do vetor vetorr. A variável i é inicializada com 0 e o loop continua enquanto i for menor que o comprimento do vetor. A cada iteração, o valor de i é incrementado.
        if (vetorr[i] > 5) {
            vetorr[i] = vetorr[i] * numero;
            //é feita uma verificação para cada elemento do vetor. Se o elemento atual for maior que 5, o valor do elemento é multiplicado pelo número fornecido
        }
    }
    return vetorr; //o vetor modificado é retornado pela função
}

/*
A função percorre cada elemento do vetor e verifica se o elemento é maior que 5. Se for, o elemento é multiplicado pelo número fornecido.
*/

document.write(calcularVetor(vetorr, numero) + '</br>')


document.write('<h3>loops e soma de vetor em vetor</h3>') //////////////////////

let vetor = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];

function somarSubVetores(vetor) {
    let resultado = []; //usado para armazenar os resultados das somas

    for (let indice = 0; indice < vetor.length; indice++) {
        let subVetor = vetor[indice];
        let soma = 0;
        //primeiro loop for, percorre cada subvetor dentro do vetor principal. A variável indice é inicializada com 0 e o loop continua enquanto indice for menor que o comprimento do vetor. A cada iteração, o valor de indice é incrementado.

        //Dentro desse loop, é criada uma variável chamada subVetor, que recebe o valor do subvetor atual. Além disso, é criada uma variável chamada soma, que será usada para calcular a soma dos elementos do subvetor

        for (let subIndice = 0; subIndice < subVetor.length; subIndice++) {
            soma = soma + subVetor[subIndice]
            //segundo loop for, que percorre cada elemento do subvetor atual. A variável subIndice é inicializada com 0 e o loop continua enquanto subIndice for menor que o comprimento do subvetor. A cada iteração, o valor de subIndice é incrementado.

            //Dentro desse loop, é realizada a soma dos elementos do subvetor, que são acessados usando subVetor[subIndice]
        }
        resultado[indice] = soma;
        //contém o resultado da soma dos elementos do subvetor atual. Esse valor é atribuído à posição correspondente no vetor resultado
    }
    return resultado;
}

/*
Essa função recebe um parâmetro chamado vetor, que é uma matriz (um vetor de vetores).
A função percorre cada subvetor dentro do vetor e calcula a soma de todos os elementos de cada subvetor
*/

document.write(somarSubVetores(vetor) + '</br>')

//------------------------------------------------
document.write('<h3>teste final</h3>') //////////////////////

function testeFinal(string, numero) {
    if (string === "mundojs") {
        document.write("MundoJS" + '</br>');
        return numero;
        //Se a string for "mundojs", a função exibirá "MundoJS" no console e retornará o parâmetro número.
    } else if (string === "soma") {
        return (numero / 2) + Math.pow(numero, 2);
        //Se a string for "soma", a função retornará o resultado da soma da metade do parâmetro número com o quadrado dele mesmo.
    } else if (string === "vetor") {
        let vetor = [];
        for (let i = 0; i < 5; i++) {
            vetor.push(numero + (i * 2));
        }
        return vetor;
        //Se a string for "vetor", a função criará e retornará um vetor com 5 elementos, onde cada elemento é igual ao parâmetro número mais o dobro do índice do vetor.
    } else if (string === "booleano") {
        let vetor = [];
        for (let i = 0; i < 5; i++) {
            vetor.push(numero + (i * 2));
        }
        let soma = vetor.reduce((a, b) => a + b, 0);
        return soma > 35;
        //Se a string for "booleano", a função fará o mesmo vetor do caso "vetor" e retornará true se a soma dos elementos deste vetor for maior que 35, caso contrário, retornará false.
    } else {
        return -1;
        //Caso a string seja diferente das opções acima, a função retornará -1.
    }
}

document.write(testeFinal("mundojs", 10) + '</br>'); // Saída: MundoJS, 10
document.write(testeFinal("soma", 5) + '</br>'); // Saída: 17.5
document.write(testeFinal("vetor", 3) + '</br>'); // Saída: [3, 5, 7, 9, 11]
document.write(testeFinal("booleano", 4) + '</br>'); // Saída: true
document.write(testeFinal("outraString", 8) + '</br>'); // Saída: -1


function testeFinal2(umaString, umNumero) {
    let retorno;

    switch (umaString) {
        case "mundojs":
            document.write("MundoJS" + '</br>');
            retorno = umNumero;
            break;
        case "soma":
            let metadeNumero = (umNumero / 2);
            let quadradoNumero = (umNumero * umNumero);
            retorno = metadeNumero + quadradoNumero;
            break;
        case "vetor":
            let vetor = [];
            for (let i = 0; i < 5; i++) {
                vetor[i] = umNumero + (i * 2);
            }
            retorno = vetor;
            break;
        case "booleano":
            let array = [];
            let total = 0;
            for (let i = 0; i < 5; i++) {
                array[i] = umNumero + (i * 2);
                total = total + array[i];
            }
            retorno = total > 35;
            break;
        default:
            retorno = -1;
    }
    return retorno;
}


document.write('<h3>alteração de valores</h3>') //////////////////////

var Aa = 10
var Bb = 20
var Cc = null

document.write('A: ' + Aa + '</br>')
document.write('B: ' + Bb + '</br>')
document.write('C: ' + Cc + '</br>')

document.write('</br>')

var Cc = Bb
var Bb = Aa
var Aa = Cc
var Cc = null

document.write('A: ' + Aa + '</br>')
document.write('B: ' + Bb + '</br>')
document.write('C: ' + Cc + '</br>')


document.write('<h3>prompt</h3> </br>') //////////////////////

// let nome = 'Sarah'
// let age = prompt('Age:')

// document.write(nome + ' tem ' + age + ' year olds' + '</br>')


document.write('<h3>parseInt</h3> </br>') //////////////////////

// var parse1 = prompt('Value 1: ')
// var parse2 = prompt('Value 2: ')

// parse1 = parseInt(parse1)
// parse2 = parseInt(parse2)
// //parseFloat & toString

// document.write(parse1 + parse2)


document.write('<h3>operadores aritmeticos</h3>') //////////////////////

var num1 = 10
var num2 = 4

document.write('soma: ' + (num1 + num2) + '</br>')
// document.write('subtração: ' + (num1 - num2) + '</br>')
// document.write('multiplicação: ' + (num1 * num2) + '</br>')
// document.write('divisão: ' + (num1 / num2) + '</br>')
// document.write('módulo inteiro: ' + (num1 % num2) + '</br>')

num1 *= 7

document.write('atribuição: ' + (num1) + '</br>')
