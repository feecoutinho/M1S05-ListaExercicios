/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

function imprimirsequencia(num) {
    let soma = 1
    let i = 1
    let anterior = 0
    
    console.log(`A sequência até o número ${num} é:`)
    while (soma <= num) {
        console.log(soma);
        soma = i + anterior;
        anterior = i;
        i = soma;
    }
}

imprimirsequencia(43)