/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */

let produto1 = {
    nome: 'felix felicis',
    preço: 25
} 

let produto2 = {
    nome: 'veritasserum',
    preço: 15
} 

let produto3 = {
    nome: 'amortentia',
    preço: 5
} 

let produto4 = {
    nome: 'polissuco',
    preço: 15
} 

let produtos = []
    produtos.push(produto1, produto2, produto3, produto4)

let somatotal = 0

for(const produto of produtos) {
    console.log(produto)
    somatotal = somatotal + produto.preço;
}

console.log(`O valor total dos produtos é de ${somatotal} galeões`)