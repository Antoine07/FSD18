const sentence = "Bonjour tout le monde";

// La structure de données Set de JS permet de créer des ensembles

const letters = new Set(sentence);

console.log([ ...letters ]);