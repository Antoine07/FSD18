const fs = require("fs");

const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, { encoding: "utf8" }, (err, data) => {
      if (err) {
        reject("File read failed:", err);
        return;
      }
      const { dragons } = JSON.parse(data); // le fichier string en Object JSON (JSON.parse)
      resolve(dragons);
    });
  });

readFile("./data/dragons.json").then((dragons) => {
  //2. Quel est le nom du dragon le plus agé ? Faite un script pour répondre à cette question.
  // par ordre décroissant
  dragons.sort((d1, d2) => d2.age - d1.age);
  console.log(dragons[0]);
  // le plus jeune attention slice retourne un tableau penser à faire un [0] pour accéder à l'élément du tableau
  console.log(dragons.slice(-1)[0]);

  // 4. Récupérez les dragons et ordonnées les par age décroissant.

  // Avec sort on aurait pu le faire dès la récupération des données
});
