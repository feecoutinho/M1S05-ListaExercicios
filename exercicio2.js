/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */

var cor_ingles = 'red'

 switch (cor_ingles.toLowerCase()) {
    case 'blue':
        console.log('Azul');
        break;
    
    case 'red':
        console.log('Vermelho');
        break;
        
    case 'pink':
        console.log('Rosa');
        break;

    case 'orange':
        console.log('Laranja');
        break; 

    case 'white':
        console.log('Branco');
        break;
    

    case 'green':
        console.log('Verde');
        break;   

    default: 
    console.log('Inválido')
}