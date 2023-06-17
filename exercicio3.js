/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */

function numprimo(num) {
    let i=2;
    let quociente=3;
    while (i < quociente) {
        quociente = num / i;
        if(num%i == 0) {
            return `O número ${num} não é primo.`
        }
        i++
    }
    return `O número ${num} é primo.`
}

console.log(numprimo(7))