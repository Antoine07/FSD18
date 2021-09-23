const student = {
  name: "Alan",
  notes: [10, 16, 17],
  average: null,
};

const PRECISION = 100;

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

const { notes } = student;

student.average = average(notes);

// On utilise les renommages de variables pour éviter les collisions avec les noms de constantes ou fonctions
const { average: a, name, notes: n } = student;

console.log(a, name, n);
