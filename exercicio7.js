/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e slice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final. A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorna o
 *      array atualizado.
 */

let palavras = ['abra', 'bulbassauro', 'charmander', 'dugtrio', 'ekans', 'muk', 'seel', 'vulpix']

function adicionarElemento(arr, elemento) {
    arr.push(elemento)
    return arr
}

/*console.log(adicionarElemento(palavras, "squirtle"))*/

function removerUltimoElemento(arr) {
    arr.pop()
    return arr
}
/*console.log(removerUltimoElemento(palavras))*/

function removerElementosIntervalo(arr,inicial,final) {
/*    const newArr = arr.slice(inicial+1, final)*/
    arr.splice(inicial+1, final-inicial-1)
    return arr
}
/*console.log(removerElementosIntervalo(palavras,1,7))*/