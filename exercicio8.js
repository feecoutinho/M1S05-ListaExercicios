/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */

function calculadora(num1,num2,operador){

    switch(operador){
        case '+':
            return num1+num2;
            
        case '-':
            return num1-num2;

        case '*':
            return num1*num2;
            
        case '/':
            return num1/num2;
    }
}

console.log(calculadora(8,11,"*"))