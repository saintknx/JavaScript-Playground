// var message = "Hello, World!"; Não recomendado, variável de escopo global
// const message = "Hello, World!"; // Variável de escopo local e imutável  
// let message = "Hello, World!"; Variável de escopo local e mutável
// message = "Hello, Universe!"; // Isso causará um erro, pois 'message' é uma constante

// alert(message);


// Strings  

const message = "Hello, World!";
console.log(message.length)     // Imprime o comprimento da string

const firstname = "Kauã";
const lastname = "Sousa";
const names = 'Felipe,João,Maria';
const felipeNome = 'Felipe';

console.log('Meu nome é ' + firstname + ' ' + lastname);
console.log(`Meu nome é ${firstname.toUpperCase()} ${lastname.toLowerCase()}`); // Template literals, mais moderno e fácil de ler, parecido com fstring do Python

console.log(names.split(',')); // Divide a string em um array usando a vírgula como separador
console.log(felipeNome.split('')); // Divide a string em um array de caracteres