let rs = require("readline-sync")

let quantidade = rs.question("Quantas maças você quer?\n")

let valorMenor12 = (0.30)
let valorMaior12 = (0.25)
let valorMaca = 0

if(quantidade <= 12){
    valorMaca = valorMenor12
}else{
    valorMaca = valorMaior12
}
let resultado = quantidade*valorMaca
    console.log(resultado)
