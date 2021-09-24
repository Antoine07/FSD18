(function () {
  console.log("Start");
  let count = 1000000000;
  while (count > 0) {
    count--;
  }
  console.log("End");
}); // appelez la fonction pour exécuter ce code

console.log('Start');
setTimeout(() => {
    console.log("TIMER");
}, 1000);
console.log('End');
