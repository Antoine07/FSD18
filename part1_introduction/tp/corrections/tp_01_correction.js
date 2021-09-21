const students = [
  { id: 0, name: "Alan", notes: [19, 18, 19, 19, 20]  },
  { id: 1, name: "Albert", notes: [11, 18, 9, 10, 11] },
  { id: 2, name: "Jhon", notes: [11, 11, 19, 12, 11] },
  { id: 3, name: "Brice", notes: [10, 18, 19, 10, 1] },
  { id: 4, name: "Alexendra", notes: [19, 18, 19, 19, 20]  },
  { id: 5, name: "Brad", notes: [11, 13, 9, 10, 11] },
  { id: 6, name: "Carl", notes: [13, 16, 9, 10, 11] },
  { id: 7, name: "Dallas", notes: [13, 18, 9, 10, 11] },
  { id: 8, name: "Dennis", notes: [19, 18, 19, 19, 20] },
  { id: 9, name: "Edgar", notes: [11, 12, 19, 12, 11] },
  { id: 10, name: "Erika", notes: [12, 12, 12, 10, 11] },
  { id: 11, name: "Isaac", notes: [11, 12, 9, 10, 11] },
  { id: 12, name: "Ian", notes: [11, 18, 9, 10, 11] },
];

/*
1. Créez une fonction permettant de calculer la moyenne. Appliquez cette fonction aux étudiants 
ci-dessus et donnez pour chaque étudiant leur moyenne, en mode impératif.
*/

const PRECISION = 10; // 2 chiffres après la virgule

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

console.log("-------Average-------");

for (const student of students) {
  console.log("Moyenne de ", student.name, " --> ", average(student.notes));
}

console.log("-------Average-------");

/*
2. Trouvez tous les étudiants ayant la même moyenne, mettez ces étudiants dans un autre tableau.
*/

const groupeAverage = [],
  test = [];

for (let i = 0; i < students.length; i++) {
  // pour chaque tour de boucle on ré-initialise le tableau
  const subGroupeAverage = [];
  // on met i pour ne pas refaire le traitement des étudiants déjà traités
  for (let j = i; j < students.length; j++) {
    if (average(students[i].notes) != average(students[j].notes)) {
      continue;
    }

    // si on n'a pas déjà traiter cet étudiant dans un groupe alors on doit le regrouper
    if (!test.includes(students[j].id)) subGroupeAverage.push(students[j]);
    test.push(students[j].id);
  }
  if(subGroupeAverage.length > 0)
    groupeAverage.push(subGroupeAverage);
}

console.log("-------Groupe meme moyenne-------");

console.log(groupeAverage);

console.log("-------Groupe meme moyenne-------");

/*
3. Quel(s) est/sont l/les'étudiant ayant la meilleur moyenne dans students.
*/

// par défaut pour commencer on choisit le premier étudiant en supposant qu'il a la meilleur moyenne

let best = students[0];

for (let i = 1; i < students.length; i++) {
    if(average(students[i].notes) > average(best.notes)) best = students[i] ;
}

console.log("-------Meilleur moyenne-------");

console.log("meilleur moyenne", best);

console.log("-------Meilleur moyenne-------");

// Maintenant que l'on a trouvé la meilleur moyenne on regroupe tous les étudiants qui auraient eu cette moyenne
const bestStudents = [];
for(const student of students){
    if(average(best.notes) == average(student.notes)) bestStudents.push(student);
}

console.log("-------Les étudiants ayant eu la meilleur moyenne sont :-------");

console.table(bestStudents);

console.log("--------------------");

/*
4. (facultatif) ajoutez au tableau students une clé  average avec la moyenne de l'étudiant respectif.
*/

for(const student of students){
    student.average = average(student.notes); // on travaille sur la même référence on revoit cela dans le cours plus loin
}

console.log(students);