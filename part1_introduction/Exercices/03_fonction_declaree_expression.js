// Exercice 
/*

Est ce le code suivant pose un problème à JS, c'est-à-dire provoque une erreur. Si oui expliquez pourquoi ?

Répondez sans executer le code 

*/

average([11, 12, 19, 20]);

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