//Declare uma variável nome e imprima o valor na tela
let nome = 'Maiara'
console.log(nome)

// Dado o código abaixo, aponte porque é gerado erro e corrija
//const idade = 39
//idade = 40
// R: precisa mudar o tipo conts(que não pode se reatribuido) por let para que a variável idade possa ter um novo valor, ficando assim o código correto:
let idade = 39
idade = 40
console.log(idade)

// Crie uma constante PI com valor 3,14 e uma variável raio com valor 5. Calcule a área de um círculo e exiba o resultado

const PI = 3.14
let raio = 5
areaCirculo = PI * (raio * raio)
console.log(areaCirculo)

//Dado o código abaixo 
let numero = 10
let NaN = '10'
// Como saber o tipo de dados de cada um?
//R: typeof
console.log(typeof numero)
console.log(typeof NaN)

// Calcule o resultado de 10 % 3
//let num1 = 10
//if(num1 % 3 === 0){
    console.log('Par')
//} else {
    console.log('Ímpar')
//}

let idade2 = 18
if(idade2 >= 18){
    console.log('Maior de idade')
}else{
    console.log('Menor de idade')
}

