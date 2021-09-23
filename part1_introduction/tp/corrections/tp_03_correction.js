const sentence = " Bonjour tout le monde , vous aimez JS ?";

/*
1. Inversez la chaîne de caractères sentence ci-dessus en utilisant que les fonctions que nous avons vues jusqu'à maintenant, n'utilisez pas la fonction reverse de JS.

2. Comptez le nombre de caractères de chaque mot.

3. Faites un script qui prend en argument une phrase et qui retourne dans un tableau le nombre de caractères de chaque mot. Vous ne compterez pas les espaces comme un caractère.

*Indication : utilisez la méthode split pour transformer la chaîne de caractères en tableau.*

4. (facultatif) Comptez maintenant chaque lettre de chaque mot. Puis comptez tous les caractères distinctes de la chaîne sentence.

5. (facultatif/recherche) Essayez avec la méthode reduce d'obtenir le résultat suivant. Comptage explicite de chaque caractère distincte.
*/

// 1
let reverseSentence = "";
for (const ch of sentence) {
  reverseSentence = ch + reverseSentence;
}
console.log("Reverse sentence", reverseSentence);
/*
'' + 'B' = 'B'
'o' + 'B' = 'oB
'n' + 'oB' = 'noB'
*/

// 2 v1

const countChar = {};

sentence
  .replace("?", "") // cherche le caractère et le remplace dans la chaîne par un espace vide
  .replace(",", "")
  .split(" ")
  .map((word) => {
    if (word) countChar[word] = word.length;
  });

console.log(countChar);

// 2 v2

// Structure de données de type clé/valeur
const countCharMap = new Map([]);

// trim retire les espaces avant et après la chaîne de caractères
const sanitizeSentence = sentence.replace("?", "").replace(",", "").trim();

for (const word of sanitizeSentence.split(" ")) {
  countCharMap.set(word, word.length);
}

console.log(countCharMap);

// 3

function countCharByWord(sentence) {
  return sentence
    .replace("?", "")
    .replace(",", "")
    .trim()
    .split(" ")
    .filter((word) => word != "") // pour retirer les éventuels caractères vides considérés comme des mots ... Voir la phrase ci-dessous
    .map((word) => {
      if (word) return [word, word.length];
    });
}

console.log(countCharByWord(sentence));

// 4 comptez les caractères distinctes de sentence

const countLetter = {};

for (const ch of sanitizeSentence) {
  if (ch == " ") continue;

  // la clé ch existe dans le tableau on incrémente, si la clé existe ce n'est pas undefined donc ce n'est pas faux
  if (countLetter[ch]) {
    countLetter[ch] += 1;
  } else {
    countLetter[ch] = 1; // si ce n'est pas encore ajouté on définit la clé et on compte 1 première occurence
  }
}

console.log(countLetter);

// 4 v2
// Un Map est une structure de données très rapide pour accéder au valeur système de clé unique
const countLetterMap = new Map([]);

for (const ch of sanitizeSentence) {
  if (ch == " ") continue;

  // la clé ch existe dans le tableau on incrémente
  if (countLetterMap.has(ch)) {
    const nb = countLetterMap.get(ch); // on récupère le nombre précédent de caractère(s) calculé et on incrémente
    countLetterMap.set(ch, nb + 1);
  } else {
    countLetterMap.set(ch, 1); // sinon on compte 1 la première fois
  }
}

console.log(countLetterMap);

// 5 avec reduce
console.log("------ reduce --------");
const reduceCountLetter = sanitizeSentence
  .split("")
  .filter((letter) => letter != " ")
  .reduce((acc, curr, i) => {

    console.log("ICI", acc, i); // debug pour voir comment cela se passe dans le reduce

    // si la clé pour cette lettre donnée existe on incrémente
    if (acc[curr]) acc[curr] += 1;
    else acc[curr] = 1; // sinon on compte 1 en créant la clé

    return acc; // ne pas oublier de retourner l'accumulateur
  }, {}); // pensez à définir un littéral comme valeur par défaut pour créer vos clé/valeur par la suite

console.log(reduceCountLetter);

/*
ICI {} 0
ICI { B: 1 } 1
ICI { B: 1, o: 1 } 2
ICI { B: 1, o: 1, n: 1 } 3
ICI { B: 1, o: 1, n: 1, j: 1 } 4
ICI { B: 1, o: 2, n: 1, j: 1 } 5
ICI { B: 1, o: 2, n: 1, j: 1, u: 1 } 6
ICI { B: 1, o: 2, n: 1, j: 1, u: 1, r: 1 } 7
ICI { B: 1, o: 2, n: 1, j: 1, u: 1, r: 1, t: 1 } 8
ICI { B: 1, o: 3, n: 1, j: 1, u: 1, r: 1, t: 1 } 9
ICI { B: 1, o: 3, n: 1, j: 1, u: 2, r: 1, t: 1 } 10
ICI { B: 1, o: 3, n: 1, j: 1, u: 2, r: 1, t: 2 } 11
ICI { B: 1, o: 3, n: 1, j: 1, u: 2, r: 1, t: 2, l: 1 } 12
ICI { B: 1, o: 3, n: 1, j: 1, u: 2, r: 1, t: 2, l: 1, e: 1 } 13
ICI { B: 1, o: 3, n: 1, j: 1, u: 2, r: 1, t: 2, l: 1, e: 1, m: 1 } 14
ICI { B: 1, o: 4, n: 1, j: 1, u: 2, r: 1, t: 2, l: 1, e: 1, m: 1 } 15
ICI { B: 1, o: 4, n: 2, j: 1, u: 2, r: 1, t: 2, l: 1, e: 1, m: 1 } 16
ICI { B: 1, o: 4, n: 2, j: 1, u: 2, r: 1, t: 2, l: 1, e: 1, m: 1, d: 1 } 17
ICI { B: 1, o: 4, n: 2, j: 1, u: 2, r: 1, t: 2, l: 1, e: 2, m: 1, d: 1 } 18

...
*/