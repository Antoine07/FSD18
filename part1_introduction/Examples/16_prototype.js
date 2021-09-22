"use strict"; // évitera l'effet de bord avec l'objet global ici Object de Node.js

const Student = {
  name: "",
  average: 17.5,
  situation: function () {
    console.log(`Name ${this.name} average : ${this.average}`);
  },
};

console.log(Student.__proto__);

function User(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

// Rappel d'un effet

// On ajoute sur le constructeur lui-même la propriété
User.prototype.fullName = function () {
  return this.name + " " + this.lastname;
};

const u1 = new User("alan", "Turring");

console.log(u1.fullName())