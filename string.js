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
