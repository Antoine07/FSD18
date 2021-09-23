const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// première paramètre fonction fléchée, deuxième paramètre val init de acc
const total = numbers.reduce((acc, curr) => {
  console.log("acc", acc, "curr", curr);

  return curr + acc;
});

/*
acc 1 curr 2
acc 3 curr 3
acc 6 curr 4
acc 10 curr 5
acc 15 curr 6
acc 21 curr 7
acc 28 curr 8
acc 36 curr 9
acc 45 curr 10  => 45 + 10 + 55
*/

console.log(total);

const total2 = numbers.reduce((acc, curr) => {
  console.log("acc", acc, "curr", curr);

  return curr + acc;
}, 100);

/*
acc 100 curr 1
acc 101 curr 2
acc 103 curr 3
acc 106 curr 4
acc 110 curr 5
acc 115 curr 6
acc 121 curr 7
acc 128 curr 8
acc 136 curr 9
acc 145 curr 10 => 145 + 10 = 155
*/

console.log(total2);

const numbers3 = [101, 17, 2, 5, 8, 10];

numbers3.reduce ((acc, curr) => {

} );