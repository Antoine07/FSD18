const students = [
  {
    name: "Alan",
    family: {
      mother: "Yvette",
      father: "Paul",
      sister: "Sylvie",
    },
    age: 35,
  },
  {
    name: "Bernard",
    family: {
      mother: "Martine",
      father: "Cécile",
      sister: "Sophie",
    },
    age: 55,
  },
];

// la manière sans l'assignation par décomposition
for (const student of students) {
  console.log(student.name);
}

// avec de l'assignation par décomposition
for (const {name, age, family: {sister}} of students) {
    console.log(name, age, sister);
  }