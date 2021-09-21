const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersMultiple3 = numbers.map( number => {

    if(number % 3 === 0) return number*100;

    return number;
});

console.log(numbersMultiple3);

// number % 3 sera vrai si et seulement si number % 3 vaut 1, 2 et faux si number % 3 vaut 0
const numbersMultiple3Bis = numbers.map( number => number % 3 ? number : number*100);

console.log(numbersMultiple3Bis);