// ​Criar um algoritmo que realize a multiplicação de dois números maiores que zero
//SEM usar o operador de multiplicação (*)  

let rs = require('readline-sync')

let numero1 = rs.questionInt('Digite um numero')
let numero2 = rs.questionInt('Digite outro numero')

let contador = 0
let resultado = 0

while(numero1 > contador){
    resultado = resultado + numero2
    contador++
}
 console.log('a mutiplicação é ' + resultado)

