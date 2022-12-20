// Crie um array vazio chamado `sacolao`, 
// e siga os passos abaixo:

const sacolao = [];

// a) Crie três objetos que vão representar frutas do 
// sacolão. Os objetos devem ter as seguintes propriedades: 

// nome: string;
// preco: number;
// disponibilidade: boolean;

const banana = {
    nome: "Banana",
    preco: 1.99,
    disponibilidade: true
}

const maca = {
    nome: "Maçã",
    preco: 2.49,
    disponibilidade: true
}

const uva = {
    nome: "Uva",
    preco: 3.19,
    disponibilidade: false
}

// b) Adicione os objetos ao array `sacolao` utilizando 
// o método **`push()`**

sacolao.push(banana, maca, uva);

// c) Imprima a o array `sacolao`, e certifique-se 
// de que agora ela seja um array **com três objetos**

console.log(sacolao);