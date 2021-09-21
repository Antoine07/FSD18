// Exercice
/*

Est ce le code suivant pose un problème à JS, c'est-à-dire provoque une erreur. Si oui expliquez pourquoi ?

Répondez sans executer le code 

*/
const PRECISION = 100;
console.log(average([11, 12, 19, 20]));

// Les fonction déclarée sont compilées en premier donc vous pouvez les appeler avant de les définir
function average(notes) {
  if (notes.length > 0) {
    let sum = 0;
    for (const note of notes) {
      sum += note;
    }

    return Math.floor((sum / notes.length) * PRECISION) / PRECISION;
  }

  return null;
}

/*

Exercice est ce que l'on peut appeler une expression de fonction avant de l'avoir déclarée ? Répondez sans exécuter le code


Non c'est impossible car on définit une expression dans une variable et on doit pour s'y référer l'avoir définie avant de l'appeler.

  */

// setStudent("alan"); // ReferenceError: Cannot access 'setStudent' before initialization

const setStudent = function (name) {
  const students = [];
  students.push(name);

  return students;
};
