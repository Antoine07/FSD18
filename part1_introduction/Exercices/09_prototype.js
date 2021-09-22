"use strict";

function User({ name, lastname, age, notes }) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  // gérer un paramètre facultatif
  if (typeof notes == "undefined") this.notes = [];
  else this.notes = notes;
}

// On ajoute sur le constructeur lui-même la propriété
User.prototype.fullName = function () {
  return this.name + " " + this.lastname + " " + this.age + " ans";
};

const alan = new User({
  age: 45,
  lastname: "Turring",
  name: "Alan",
  notes: [15, 17, 13],
});
console.log(alan);
console.log(alan.fullName());

/*
2. Créez maintenant les 4 users suivants :
- Alan Phi age 45 ans notes : 15, 17, 13
- Bernad Lu age 78 ans notes : 11, 12, 9
- Sophie Boo age 56 ans notes : 10, 15, 11
- Alice Car age 45 ans notes : 5, 18, 20
*/

const users = [];
users.push(alan);
const bernard = new User({
  age: 78,
  lastname: "Lu",
  name: "Bernad",
  notes: [11, 12, 9],
});
const sophie = new User({
  age: 56,
  lastname: "Boo",
  name: "Sophie",
  notes: [10, 15, 11],
});
const alice = new User({
  age: 45,
  lastname: "Car",
  name: "Alice",
  notes: [5, 18, 20],
});
users.push(bernard);
users.push(sophie);
users.push(alice);

/*
3. Créez un nouveau prototype average dans la fonction constructeur User, qui calculera la moyenne des notes de chaque user.
*/
User.prototype.precision = 100;

User.prototype.average = function () {
  if (this.notes && this.notes.length > 0) {
    let sum = 0;
    for (const note of this.notes) sum += note;

    return Math.floor((sum / this.notes.length) * this.precision) / this.precision;
  }

  return null;
};

for (const user of users) {
  console.log(user.name, user.average());
}
