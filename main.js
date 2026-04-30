const names = ['Kauã', 'Felipe', 'Maria', 'João', 10, false] // Declarando lista
//Java script não é uma linguagem de tipagem forte, ou seja, podemos misturar tipos de dados em uma mesma lista, mas isso não é recomendado
const joao = names[1]; // Acessando o elemento na posição 3 da lista, que é 'João'
// console.log(joao); // Imprime o elemento na posição 3 da lista, que é 'João'
names.push('Ana'); // Adiciona um novo elemento 'Ana' no final da lista
console.log(names); // Imprime a lista atualizada com o novo elemento 'Ana'
names.shift(); // Remove o primeiro elemento da lista, que é 'Kauã', e retorna esse elemento removido. O argumento '20' é ignorado, pois o método shift() não aceita argumentos.
names.unshift('Carlos'); // Adiciona um novo elemento 'Carlos' no início da lista
console.log(names); // Imprime a lista atualizada após remover o primeiro elemento, que é 'Kauã'
names.pop(); // Remove o último elemento da lista, que é 'Ana', e retorna esse elemento removido. O argumento '20' é ignorado, pois o método pop() não aceita argumentos.
console.log(names); // Imprime a lista atualizada após remover o último elemento, que é 'Ana'

names[3] = 'Pedro'; // Altera o elemento na posição 3 da lista para 'Pedro'
console.log(names); // Imprime a lista atualizada com o elemento na posição 3 alterado para 'Pedro' mesmo que a lista seja declarada como const, pois o conteúdo da lista pode ser alterado, mas a referência à lista não pode ser reatribuída. 
//                      Se tentarmos reatribuir a variável 'names' para apontar para uma nova lista, isso causará um erro, pois 'names' é uma constante. No entanto, podemos modificar os elementos dentro da lista, como fizemos ao alterar o elemento na posição 3 para 'Pedro'.

console.log(names.indexOf('Maria')); // Imprime o índice do elemento 'Maria' na lista, que é 2
names.pop(); // Remove o último elemento da lista, que é '10', e retorna esse elemento removido. O argumento '20' é ignorado, pois o método pop() não aceita argumentos.


const sortedNames = names.sort(); // Ordena a lista em ordem alfabética e armazena a lista ordenada na variável 'sortedNames'
console.log(sortedNames); // Imprime a lista ordenada em ordem alfabética, que é ['Carlos', 'Felipe', 'João', 'Maria', 'Pedro']
console.log(names); // Imprime a lista original, que também foi modificada para a lista ordenada, pois o método sort() modifica a lista original. Portanto, a lista 'names' agora também está ordenada em ordem alfabética, que é ['Carlos', 'Felipe', 'João', 'Maria', 'Pedro']
const indexOfPedro = names.indexOf('Pedro'); // Armazena o índice do elemento 'Pedro' na variável 'indexOfJoao'
console.log(indexOfPedro); // Imprime o índice do elemento 'Pedro' na lista, que é 3
names.shift()
console.log(names.length); // Imprime o comprimento da lista, que é 5
console.log(names)

const namesIsArray = Array.isArray(names); // Verifica se a variável 'names' é um array e armazena o resultado na variável 'namesIsArray'   

console.log(namesIsArray); // Imprime true, pois 'names' é um array
