// var message = "Hello, World!"; Não recomendado, variável de escopo global
// const message = "Hello, World!"; // Variável de escopo local e imutável  
// let message = "Hello, World!"; Variável de escopo local e mutável
// message = "Hello, Universe!"; // Isso causará um erro, pois 'message' é uma constante

// alert(message);


// Strings  

// const message = "Hello, World!";
// console.log(message.length)     // Imprime o comprimento da string

// const firstname = "Kauã";
// const lastname = "Sousa";
// const names = 'Felipe,João,Maria';
// const felipeNome = 'Felipe';

// console.log('Meu nome é ' + firstname + ' ' + lastname);
// console.log(`Meu nome é ${firstname.toUpperCase()} ${lastname.toLowerCase()}`); // Template literals, mais moderno e fácil de ler, parecido com fstring do Python

// console.log(names.split(',')); // Divide a string em um array usando a vírgula como separador
// console.log(felipeNome.split('')); // Divide a string em um array de caracteres

// Números
// const number = 5;
// console.log('Numero: ' + number); // Imprime o número
// console.log('Adição + 10 : ' + (number + 10)); // Adição
// console.log('Subtração - 2: ' + (number - 2));  // Subtração
// console.log('Multiplicação x 3 :' + (number * 3));  // Multiplicação
// console.log('Divisão por 2: ' + (number / 2));  // Divisão
// console.log('Módulo 2:' + (number % 2));  // Módulo (resto da divisão)
// console.log('Exponenciação por 2: ' + (number ** 2)); // Exponenciação (5 elevado a 2)
// console.log('Raiz quadrada: '+ Math.sqrt(number)); // Raiz quadrada de 5
// console.log('Potencia de 3: '+ Math.pow(number, 3)); // 5 elevado a 3

// console.log('Número para string: ' + number.toString()); // Converte o número para string
// console.log('Tipo da variável: ' + typeof number); // Imprime o tipo da variável

// Booleanos
let estaAtivo = true;
let estaChovendo = false;

//  = Atribuição - define ou altera o valor de uma variável
//  == Igualdade - compara os valores, mas não os tipos (pode causar resultados inesperados)
//  === Estritamente igual - compara os valores e os tipos (recomendado para evitar erros)

// console.log(2 == 3);

// Null & Undefined

// const x = null; // Representa a ausência intencional de valor
// const y 

// console.log(x); // Imprime null
// console.log(y); // Imprime undefined, pois 'y' não foi inicializada

const list = [1,2,3,4,5]
const object = { name: 'Kauã', age: 21, city: 'São Paulo'}
console.log(list); // Imprime o array
console.log(object); // Imprime o objeto