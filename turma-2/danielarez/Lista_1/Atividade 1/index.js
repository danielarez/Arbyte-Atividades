//​Escreva um programa para ler o ano de nascimento de uma pessoa 
//e escrever uma mensagem que diga se ela poderá ou não votar este ano 
//(não é necessário considerar o mês em que ela nasceu)

let rs = require('readline-sync')

let data_nasc = rs.questionInt('Qual seu ano de nasc?\n')
let ano = '2003'
  

if (data_nasc <= ano){
    console.log('Você poderá votar este ano')
}else{
    console.log('Você não pode votar')
}

