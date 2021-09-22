const populations = [
  {
    id: 0,
    name: "Alan",
    jobs: ["dev junior", "dev fullstack"],
    password: "tyeedsa00",
  },
  { id: 1, name: "Albert", jobs: ["doctor"], password: "tyeidii00x" },
  {
    id: 2,
    name: "Jhon",
    jobs: ["mathematician", "doctor"],
    password: "xyuussssuoi00uuu",
  },
  { id: 3, name: "Brice", jobs: ["dev fullstack"], password: "xytoiab00ssss" },
  { id: 4, name: "Alexendra", jobs: ["dentist"], password: "aoiab33" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl", jobs: ["lead dev", "dev fullstack"] },
  { id: 7, name: "Dallas", jobs: ["dev fullstack"] },
  { id: 8, name: "Dennis", jobs: ["integrator", "dev fullstack"] },
  { id: 9, name: "Edgar", jobs: ["mathematician"] },
  { id: 10, name: "Erika", jobs: ["computer scientist", "mathematician"] },
  { id: 11, name: "Isaac", jobs: ["doctor"], password: "Axgkj22Kl" },
  { id: 12, name: "Ian", password: "Axgkj00Kl" },
];

// 1. Compter tous les docteurs
// includes une méthode qui s'applique au tableau et qui permet de regarder si il y a un terme donné qui match dans un tableau
let countDoctor = 0;
for (const pop of populations) {
  if (pop.jobs) {
    if (pop.jobs.includes("doctor")) countDoctor++;
  }
}

console.log("Nombre de docteur", countDoctor);

// 2. Récupérez les noms des dev fullstack

const namesFullStack = [];
for (const pop of populations) {
  if (pop.jobs) {
    if (pop.jobs.includes("dev fullstack")) namesFullStack.push(pop.name);
  }
}

console.log(namesFullStack);

// filter qui s'applique sur les tableaux, le résultat c'est un tableau de dimension égale ou plus petite que le tableau lui-même

// le filter on lui passe une fonction qui renvoie true ou false

const namesFullStack2 = populations
  .filter((pop) => pop.jobs && pop.jobs.includes("dev fullstack")) // on récupère que les littéraux full stack
  .map((pop) => pop.name); // en ré-appliquant map sur le résultat on récupère maintenant que les noms

console.log(namesFullStack2);

// 3. Récupérez les noms des personnes qui n'ont jamais travaillés

const nameNoJob = [];
for (const pop of populations) {
  // on test le fait qu'il n'y a pas de clé donc c'est une personne qui n'a jamais travaillé
  if (typeof pop.jobs == "undefined") {
    nameNoJob.push(pop.name);
  }
}

console.log(nameNoJob);

// approche filter et map
const nameNoJob2 = populations
  .filter((pop) => typeof pop.jobs == "undefined") // on filtre les personnes qui n'ont pas de clé job donc qui n'ont jamais travaillé
  .map((pop) => pop.name); // le map sert à réduire la sortie des résultats.

console.log(nameNoJob2);

/*
4. Etudiez les mots de passe de chaque personne, comptez le nombre de caractères de chaque mot de passe.
*/

const analysePass = populations.map((pop) => {
  const lenPassword = pop.password ? pop.password.length : "no password";

  // on retourne un littéral, notez que vous pouvez uniquement mettre la variable, dans ce cas JS va créé la clé/valeur automatiquement par exemple avec lenPassword ci-dessous
  return { name: pop.name, lenPassword };
});

console.log(analysePass);

// Deuxième approche c'est d'ajouter dans le tableau populations pour chaque personne une clé lenPassword pour centraliser l'information

for (const pop of populations) {
  if (pop.password) {
    pop.lenPassword = pop.password.length;
  }
}

console.log(populations);

// 5. Récupérez l'utilisateur ayant le plus grand mot de passe.

let personBigPass = {
  name : "no body",
  lenPassword : 0
} ;

for (const pop of populations) {
  
  // on vérifie que la clé pop.lenPassword existe 
  // si la clé existe et si la longueur du password est plus grand on change la personne sélectionnée
  if(typeof pop.lenPassword != 'undefined' && pop.lenPassword > personBigPass.lenPassword){
    personBigPass = {
      name : pop.name,
      lenPassword : pop.lenPassword
    }
  }
}

console.log(personBigPass);

// on peut finir par chercher le/les personnes ayant le plus long mot de passe
const maxLenPass = personBigPass.lenPassword;
const personsBigPass = [];
for (const pop of populations) {

  if(pop.lenPassword && pop.lenPassword == maxLenPass) personsBigPass.push(pop);
}

console.log(personsBigPass);

// 6. (Facultative) Quels sont les mots passes ayant le plus de caractères différents.

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const complexity = [];

for (const pop of populations) {
  if(pop.password){
    const ensemble = [];
    for(const ch of pop.password){
      if( ! ensemble.includes(ch) ) ensemble.push(ch);
    }

    complexity.push({
      name : pop.name,
      lenPassword : pop.lenPassword,
      characters : ensemble.join(''), // mettre les caractères dans une chaîne de caractères,
      numDiffChar : ensemble.length
    });

  }
}

console.table(complexity);