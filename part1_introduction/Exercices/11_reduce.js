const numbers01 = [101, 17, 2, 5, 8, 10];

const even = numbers01.reduce(
  (acc, curr) => (curr % 2 == 0 ? curr + acc : acc),
  0
);

/*

1.curr = 101, => retourne acc = 0

2.curr= 17, => retourne  acc = 0

3. curr = 2 => acc = 2

4. curr = 5 => acc = 2

5. curr = 10 => 20

6. curr = 8 => 10

*/

console.log(even);

const numbers02 = [101, [17, 2], 5, [8, 9, 10], 10];

const flat = numbers02.reduce((acc, curr) => {
  let sum = curr; // changement de variable
  if (Array.isArray(sum)) {
    sum = sum.reduce((acc, curr) => acc + curr);
  }

  return sum + acc;
}, 0);

console.log(flat);

/*

1. sum = 101 isArray = false, acc = sum + 0 = 101

2. sum = [17, 2] isArray = true => sum = 19, acc = 19 + 101 = 120

3. sum = 5 isArray = false , acc = sum + acc = 5 + 120 = 125

4. sum = [8, 9, 10] isArray = true => sum = 27 , acc = sum + acc = 27 + 125 = 152

5. sum = 10 isArray = false , acc = sum + acc = 10 = 152 = 162

*/

// 3

const pokemon = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" },
];

// const pokemonType = pokemon.reduce((acc, curr) => {

//     return acc;
// }, {});

// console.log(pokemonType);

// /*
// 1. acc = {} => {}

// 2. acc = {} => {}

// 3. acc = {} => {}

// */

// const pokemonType = pokemon.reduce((acc, curr) => {

//     return acc;
// }, {});


const pokemonType = pokemon.reduce((acc, curr) => {
    acc[curr.name] = { type : curr.type}; // à chaque fois une crée une nouvelle clé donc un push les éléments dans le littéral

    return acc;
}, {});

/*
1. acc = { { charmander : { type : "fire" } } }

2. acc = { { charmander : { type : "fire" }, squirtle: {type: 'water'} } }

3. acc = { { charmander : { type : "fire" }, squirtle: {type: 'water'}, bulbasaur: {type: 'grass'}} }
*/

console.log(pokemonType);