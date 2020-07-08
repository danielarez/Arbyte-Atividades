//Faça um programa que recebe um número de entrada e repita amensagem 
//“BIP BIP” de acordo com o número inserido.

let rs = require('readline-sync')

let respostaUsuario = rs.questionInt('Insira um número')
let contador = 0

while (contador < respostaUsuario) {
    console.log('Bip Bip')
    contador = contador + 1
 }   
    