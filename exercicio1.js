/**
 * [M1S05] Ex 1 - Classificação de idade
 *
 * Escreve um programa que atribui um valor a uma variável `idade` e determina
 * em qual categoria ela se enquadra: criança (0-12 anos), adolescente (13-17 anos),
 * adulto (18-59 anos) ou idoso (60 anos ou mais). Utiliza uma estrutura condicional
 * (if, else if, else).
 */

var idade =63

if (idade > 0 & idade <= 12) {
    console.log("criança")
} 
else if (idade > 12 & idade <= 17) {
    console.log ("adolescente")
}
else if (idade > 17 & idade <= 59) {
    console.log ("adulto")
}
else if (idade > 60) {
    console.log ("idoso")
}