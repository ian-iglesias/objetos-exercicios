// Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:
// ```
// const pokemon1 = {
// 	nome: "Bulbasaur",
// 	tipo: "Grama",
// 	nivel: 5
// };
// ```

// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
};

const pokemon1Copia = {
    nome: "Squirtle",
    tipo: "Água",
    nivel: 5
}

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio.

const ataques = [];
pokemon1[ataques];

console.log(pokemon1);

// c-) crie um objeto de `ataque` com a estrutura abaixo e o adicione no array `ataques` utilizando `**push()**`

// ```
// nome: Investida,
// dano: 40,
// tipo: Normal,
// precisao: 100,
// ```

const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Água",
    precisao: 100
};

ataques.push(ataque);
console.log(pokemon1);

// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade de mesmo nome criada para o objeto original;



// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**; no array de `ataques`

// e) para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array.

// f) Imprima os dois objetos  do tipo pokemon no console.