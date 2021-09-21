const numbers = [1, 3, 2, 4, 7, 4, 8];

const students = [
  { id: 0, name: "Alan", notes: [11, 12, 14, 16, 17] },
  { id: 1, name: "Albert", notes: [11, 18, 9, 10, 11] },
  { id: 2, name: "Jhon", notes: [11, 11, 19, 12, 11] },
  { id: 3, name: "Brice", notes: [10, 18, 19, 10, 1] },
  { id: 4, name: "Alexendra", notes: [17, 15, 19, 12, 11] },
  { id: 5, name: "Brad", notes: [11, 13, 9, 10, 11] },
  { id: 6, name: "Carl", notes: [13, 16, 9, 10, 11] },
  { id: 7, name: "Dallas", notes: [13, 18, 9, 10, 11] },
  { id: 8, name: "Dennis", notes: [10, 8, 19, 12, 11] },
  { id: 9, name: "Edgar", notes: [11, 12, 19, 12, 11] },
  { id: 10, name: "Erika", notes: [12, 12, 12, 10, 11] },
  { id: 11, name: "Isaac", notes: [11, 12, 9, 10, 11] },
  { id: 12, name: "Ian", notes: [11, 18, 9, 10, 11] },
];

// crée une fonction average générale
function average(notes) {
  return 1; // moyenne
}

for(const student of students){

    // student.notes
    console.log(student.notes);
    student.avg = 1;
}

console.log(students);