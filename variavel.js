// var message = "Hello, World!"; Não recomendado, variável de escopo global
const message = "Hello, World!"; // Variável de escopo local e imutável  
// let message = "Hello, World!"; Variável de escopo local e mutável
message = "Hello, Universe!"; // Isso causará um erro, pois 'message' é uma constante

alert(message);
