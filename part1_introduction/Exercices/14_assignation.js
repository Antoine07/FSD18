// 1
const strNumbers = [];
const str1 = ["one", "two"];
const str2 = ["three", "four"];

// const strNumbers = [ ...str1, ...str2];

strNumbers.push(...str1, ...str2); // n'oubliez pas le spread operator pour mettre à plat

console.log(strNumbers);

// 2
const state = {
  name: "Alan",
  age: 18,
  email: "alan@alan.fr",
};

const newState = { ...state, age: 45 };

console.log(newState);

// 3
const state02 = {
  count: 3,
  numbers: [1, 2, 3],
};

const newState02 = { ...state02, count : 0, numbers : [] };

console.log(newState02);

