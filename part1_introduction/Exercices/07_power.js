/**

1. Soit numbers une liste de nombres entiers, élevez uniquement à la puissance 3 les nombres pairs. Utilisez une fonction flèchée pour cette question. Pensez à créeer un nouveau tableau avec les résultats demandés.

2. (facultatif) Faites un tableau des nombres pairs élevés à la puissance 2 et impairs à la puissance 3. Améliorez la fonction fléchée afin qu'elle puisse élever à une puissance quelconque un nombre donné.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sans vérifier les types on peut l'écrire très simplement
const power = (n, p) => n ** p;

const evenNumbers = [];
const oddNumbers = [];

// 1 version
// for(const number of numbers){
//     if(number % 2 == 0 ){
//         evenNumbers.push(power(number, 3));
//     }
// }

// 2 version
for (const number of numbers) {
  if (number % 2) continue; // si c'est impair on passe à l'itération suivante et sinon on push dans evenNumbers le nombre élevé à la puissance 3

  evenNumbers.push(power(number, 3));
}

console.table(evenNumbers);

// puissance en fonction de la parité deuxième question
const evenNumbers2 = [];
const oddNumbers2 = [];

for (const number of numbers) {
    
  //   if (number % 2) {
  //     oddNumbers2.push(power(number, 3));
  //   } else {
  //     evenNumbers2.push(power(number, 2));
  //   }

  // avec un ternaire plus rapide 

  number % 2
    ? oddNumbers2.push(power(number, 3))
    : evenNumbers2.push(power(number, 2));
}

console.table(oddNumbers2);
console.table(evenNumbers2);
