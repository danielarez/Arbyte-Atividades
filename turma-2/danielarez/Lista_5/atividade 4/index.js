// Ler o nome de um aluno e suas duas notas A e B,
// e após calcular a média ponderada entre estas notas
// (A tem 30% do peso do grau final e B tem 70% do peso).
// Repetir este procedimento para uma turma composta por cinco alunos, usando o comando For. 
let rs = require ('readline-sync')

let alunos = 5

for(let i = 0; i <alunos; i++){
    
    let  nomeAluno = rs.question('Nome do Aluno?\n')
    let notaA = rs.question('qual a primeira nota\n')
    let notaB = rs.question('qual a segunda nota\n')
    let notaAFinal =(notaA/100)*30
    let notaBFinal =(notaB/100)*70
    let notaFinal = notaAFinal + notaBFinal

    console.log(`O aluno ${nomeAluno} teve sua nota com valor ${notaFinal}´)
}