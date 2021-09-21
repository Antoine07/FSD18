function sum(x, y, z) {
  console.log(arguments); // littéral dans lequel JS place toutes les valeurs passées en argument.
  for (const num of arguments) {
    console.log('ici', num);
  }
  return x + y + z;
}

// console.log(sum(1, 2, 3, 4, 8, 9, 10));

console.log(sum(...[19, 20, 21]));
