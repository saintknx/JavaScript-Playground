const numbers = [1,2,3,4,5];

const numbersMultipliedByTwo = numbers.map(function(number){
    return number * 2; // Multiplica cada elemento do array 'numbers' por 2 e retorna um novo array com os resultados. 
    // O método map() itera sobre cada elemento do array 'numbers', aplica a função de multiplicação por 2 a cada elemento e retorna um novo array contendo os resultados dessa operação. Portanto, o array 'numbersMultipliedByTwo' conterá os valores [2, 4, 6, 8, 10], que são os elementos do array original multiplicados por 2.
});

console.log(numbersMultipliedByTwo); // Imprime o array resultante da multiplicação de cada elemento por 2, que é [2, 4, 6, 8, 10]

const ages = [8, 13, 27, 30, 22, 40];
const evenAges = ages.filter(function(age){
    return age % 2 === 0; // Filtra os elementos do array onde a idade é par em uma nova array. O método filter() itera sobre cada elemento do array 'ages', aplica a função de verificação de paridade (age % 2 === 0) a cada elemento e retorna um novo array contendo apenas os elementos que satisfazem essa condição. 
    // Portanto, o array 'evenAges' conterá os valores [8, 30, 22, 40], que são as idades pares do array original.
});

console.log(evenAges); // Imprime o array resultante do filtro de idades pares, que é [8, 30, 22, 40]

const numeros = [10, 20];

// Tentando transformar dados com a ferramenta errada:  - Basicamente, o metodo filter funciona operando em true e false, se a validação retornar 1 ou 0, 1 para true e 0 para false, o filtro deixara apenas passar a situação verdadeira.
const bizarro = numeros.filter(numero => {
    return numero * 3; 
});

console.log(bizarro); // Resultado: [10, 20]

const ages = [8, 13, 27, 30, 22, 40];
const sumOfAges = ages.reduce(function(age, acumulator){
    return acumulator + age;
}, 0)

console.log(sumOfAges); // Imprime a soma de todas as idades, que é 140
