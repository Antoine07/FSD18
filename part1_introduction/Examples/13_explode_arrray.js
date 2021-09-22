

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// On peut en JS mettre des caractères dans un tableau
// le caractère vide est le caractère entre chaque caractère et donc permet de spliter la chaîne en un tableau de caractères.
// le reverse appliquée à un tableau renverse l'ordre des éléments du tableau (dans un tableau)
const tabChars = characters.split('').reverse();

// la méthode join permet de rassembler un tableau d'élément en chaîne de caractères.
console.log(tabChars.join(''))