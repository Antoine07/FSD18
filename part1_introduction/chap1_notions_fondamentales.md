# Introduction

JS première version 1995, auteur Brendan Eich.

Rappelons que JS est un langage interprété dont le typage est faible. Mais attention, cela ne veut pas dire que JS ne définit pas un type à ses variables.

Un typage faible permet les convertions de type implicite :

```js
let foo = 1 + "2";
```

Et JS a un typage dynamique, le type est déterminé à l'exécution :

```js
// Le type de a sera défini à l'exécution de cette ligne
let a = 1;
```

Un langage interprété utilise le code source pour le compiler puis l'exécuter, il n'y a pas de création d'exécutable définitif. Pour chaque exécution, JS repartira du code source.

Le moteur JS de compilation peut taguer du code qui se répète et créer, pour ces parties uniquement, un exécutable "définitif".

JS est un langage de script orienté objet.

JS suit la norme **ECMAScript**, standard que suivent certains langages de script comme Javascript. Cette norme évolue en permanence. Les principaux navigateurs Web mettent à jour leur moteur d'exécution pour suivre les évolutions de ce langage.

Une version majeure d'ECMAScript est celle qui a été définie en 2015 : ES2015 que l'on appelle ES6. Le nom de la version étant déterminé par la dernière version du standard en cours donc ES6 pour 2015. Aujourd'hui la dernière version officielle est EMACScript 2020.

## Typage

Bien que JS soit un langage faiblement typé, JS type toutes ses variables.

Le type d'une variable en JS est déterminé lorsqu'on la définit et qu'on lui assigne une valeur particulière. Ce dernier peut changer si on ré-assigne à la variable une valeur d'un autre type.

```js
let n = 10;
console.log(typeof n); // number

// ré-assignation
n = "Hello";

console.log(typeof n); // string
```

Dans l'exemple ci-dessus le type de la variable **n** a changé; il est passé du type number au type string (par ré-assignation).

Notons que lorsque vous définissez une variable sans lui affecter une valeur particulière, celle-ci est de type "undefined" :

```js
let username;
console.log(typeof username); // undefined
```

## Les différents types en JS

On distingue les types suivants en Javascript. Attention, tous les types primitifs définissent des valeurs non modifiables (immuables).

### 1. Types primitifs

- boolean

```js
// On ne peut pas modifier un "true" ...
let flag = true;
```

- null

```js
// On ne peut pas modifier un "null" ...
let flag = null;
```

- undefined

- number

- bigInt (big integer)

Il faut ajouter l'opérateur **n** pour définir des BigInt.

```js
const x = 2n ** 100n;
console.log(x);
// 1267650600228229401496703205376n
```

- string

```js
let message = "Hello World";
```

- symbole (type introduit à partir de la norme ES6, que nous n'aborderons pas dans ce cours).

---

### 2. Les types Objects

Ils sont mutables, on peut modifier la valeur d'un objet. Un objet est une valeur conservée en mémoire à l'aide d'une référence unique.

Dans la liste des objets vous avez :

- Les objets classiques : les classes et les fonctions.

```js
class Model {
  constructor(name) {
    this.name = name;
  }

  get() {
    return this.name;
  }
}

// Création d'un instance (objet)
const myModel = new Model();

function modelFunc(n) {
  let name = n;

  return name;
}
```

- Les objets natifs comme les dates

```js
const now = new Date();
```

- Les collections comme les tableaux, Map, Set, ...

Les déclarations suivantes pour un tableau sont identiques :

```js
let notes = [1, 2, 3];
let newNotes = new Array(1, 2, 4);
```

Un Map est une simple collection de clés/valeurs.

```js
// création d'un Map
const store = new Map();

store.set("A1", 10.6);
store.set("A2", 8.9);

console.log(store);
// {"A1" => 10.6, "A2" => 8.9}

const ensemble = new Set([1, 2, 3, 4, 5, 5]);
console.log(ensemble);
// [1, 2, 3, 4, 5] il n'y a pas de doublon
```

- Les JSON Javascript Object Notation

## Portée (ou scope en Anglais) des variables en JS

Définition let :
**La variable définie avec let a une portée scopée au niveau du bloc dans lequel elle a été déclarée.**

_Remarque importante : lorsque vous définissez une variable à l'intérieur d'une fonction elle est scopée (portée) dans la fonction elle-même; elle n'a pas d'effet de bord avec le reste du script._

```js
function foo() {
  let a = 10;
  console.log(a); // affiche 10
}

foo();

// ReferenceError
console.log(a);
```

Si vous définissez une variable **de même nom** à l'extérieur de la fonction, alors elle n'aura pas d'effet sur la variable définie à l'intérieur de la fonction foo :

```js
let a = 11;

function foo() {
  let a = 10;
  console.log(a);
}

// affiche 10
foo();

// affiche 11
console.log(a);
```

### Remonter des scopes

JS cherche la définition de ses variables dans le scope courant et sinon il remonte les scopes. Si la variable n'est définie dans aucun des scopes, alors une erreur **ReferenceError** est levée.

```js
// bloc courant pour b
let b = 11;

function baz() {
  // bloc courant pour c
  let c = 9;

  // JS ne trouve pas b dans le bloc courant => il remonte les scopes
  console.log(b, c);
}

// affiche 11 9
baz();
```

Un autre exemple :

```js
// bloc courant
let b = 11;

function baz() {
  console.log(b);

  function foo() {
    console.log("Valeur du symbole b : ", b);
  }

  foo();
}

// affiche 11
baz();
```

## Exercice scope calcul (sans coder)

Est ce que le code qui suit vous semble correcte ? Répondre sans exécuter le code. Si ce dernier n'est pas valide modifiez-le afin qu'il puisse s'exécuter correctement.

```js
let a = 1;

function calcul() {
  let a = 2 + a;

  console.log(a, "calcul");

  function sub_calcul() {
    let b = a + 1;

    console.log(b, "sub_calcul");
  }

  sub_calcul();
}

calcul();
```

## Exercice TDZ (temporal dead zone) (sans coder)

Est ce que le code qui suit vous semble correcte ? Répondez sans exécuter le code.

```js
function tdz() {
  console.log(tdz_val);

  let tdz_val = "Temporal Dead Zone";
}

tdz();
```

## Exercice for let (sans coder)

Est ce que le code qui suit vous semble correcte ? Répondez sans exécuter le code.

```js
let i = 100;

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);
```

Est ce que le code qui suit vous semble correcte ? Répondez sans exécuter le code.

Si ce code est valide qu'affichera-t-il ?

```js
for (let j = 0; j < 10; j++) {}
console.log(j);
```

## Déclaration d'une constante

Définition :
**La variable définie avec const a une portée scopée au niveau du bloc dans lequel elle a été déclarée.**

Le mot réservé du langage JS **const** permet de définir une constante à assignation unique. Notez que vous êtes obligé de lui donner une valeur lors de sa définition. Une constante ne peut être re-définie.

```js
const API_KEY = "ABf#123@";
console.log(API_KEY);
```

Une constante peut contenir tous types de variable. Dans le cas d'un objet comme un tableau par exemple, les valeurs du tableau sont modifiables. En effet, une constante bloque la ré-assignation de la variable, mais ne rend pas l'objet non-modifiable.

```js
const STUDENTS = ["Alan", "Bernard", "Jean"];

STUDENTS.push("Sophie");

console.log(STUDENTS);
//["Alan", "Bernard", "Jean", "Sophie"]

STUDENTS.pop();

console.log(STUDENTS);
// ["Alan", "Bernard", "Jean"]
```

Par contre ce qui suit est impossible, l'erreur suivante sera levée :
**TypeError: Assignment to constant variable.**

```js
let newStudents = ["Alice"];
// re-assignation impossible
STUDENTS = newStudents;
```

## Exercice const & for

1. Pouvez-vous utiliser à votre avis le mot réservé const dans la boucle suivante ?

```js
for (const j = 0; j < 10; j++) {}
```

2. Utilisez la syntaxe de boucle for of et const sur l'itérable STUDENTS et affichez (console.log) ses valeurs :

```js
const STUDENTS = ["Alan", "Bernard", "Jean"];
```

### var définition

**Ce mot clé pour définir une variable ne doit plus être utilisé, utilisez let à la place.**

Il permet de définir une variable globale ou locale à une fonction sans distinction de bloc :

```js
function foo() {
  var x = 10; // portée fonction pas bloc comme let
  if (true) {
    var x = 2; // c'est la même variable !
    console.log(x); // 2
  }
  console.log(x); // 2
}
foo(); // 2 2
```

Par comparaison avec le mot clé let :

```js
function bar() {
  let x = 10; // portée fonction pas bloc comme let
  if (true) {
    let x = 2; // c'est la même variable !
    console.log(x); // 2
  }
  console.log(x); // 10
}
bar(); //  2 10
```

## Fonction

Une fonction en JS est un objet.

### Paramètres par défaut (facultatif)

```js
function add(a, sup = 1) {
  return a + sup;
}

add(10); // affiche 11

add(10, 0); // affiche 10
```

### 01 Exercice ttc

1. Créez une fonction qui permet de calculer un prix TTC connaissant un prix HT. Donnez une valeur de 20% par défaut pour la TVA.

2. Vérifiez que le type des variables passées en paramètre ne posent pas de problème. Utilisez **parseFloat** pour la vérification des types. Affichez les résultats avec au plus 2 chiffres après la virgule.

```js
// 1.
ttc(100, 0.2); // 120
ttc(100.5, 0.2); // 120.6

// 2.
// Gestion du type
ttc("hello", 0.2); // Erreur de type
ttc(100.5, "hello"); // Erreur de type
ttc("100", ".3"); // 130
```

## Syntaxe par décomposition/déballage ou unpacking

Si vous avez une fonction avec de nombreux paramètres ou des paramètres variables, utilisez le **spread operator** pour passer les valeurs à la fonction :

```js
function sum(x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];
sum(numbers[0], numbers[1], numbers[2]);

sum(...numbers); // sum(1, 2, 3) unpacking
```

### 02 Exercice sum spread TTC

Ecrivez une fonction **sumTTC** qui prend 3 nombres arbitraires de prix HT et retourne la somme de ces prix TTC. La TVA est un paramètre facultatif (20%).
Vérifiez que le type des variables passées en paramètre ne posent pas de problème, utilisez **parseFloat**. Affichez les résultats avec au plus 2 chiffres après la virgule.

Les prix HT seront donnés dans un tableau :

```js
const pricesHT = [100, 200, 55];

console.log(sumTTC(...priceHT));
console.log(sumTTC(...priceHT, 0.3));

// vérifiez le type des variables
const badPriceHT = [100.5, "hello", 55.7];
console.log(sumTTC(...badPriceHT, 0.3));
```

### littéral pour définir des paramètres

Vous pouvez utiliser la syntaxe suivante pour définir les paramètres d'une fonction. Dans ce cas vous n'avez pas à vous soucier de l'ordre des paramètres passé à la fonction.

```js
function baz({ a, b }) {
  console.log(a, b);
}

baz({ a: 1, b: 2 }); // 1 2
baz({ b: 2, a: 1 }); // 1 2
```

## Le point sur le this des objets

Le this d'un objet est déterminé par la manière dont vous allez appeler l'objet "contexte".

L'objet sur lequel vous **appelez** la fonction détermine le this :

**objet.my_function()**

```js
'use strict';

const o1 = {
    f1 : function(){

      return this;
    }
}

console.log(o1.f1()) ; // this de o1

const o2 = {
    f2 : o1.f1
}

console.log(o2.f2()) ; // this de o2

--- HORS PROGRAMME A LIRE PLUS TARD

const o3 = o1.f1;

console.log(o3()) ; // undefined car on n'appelle la fonction f1 explicitement
```

De même, faites attention dans les fonctions de callback. Dans l'exemple qui suit setTimeout fera appel à la fonction sans reprendre le context de l'objet lui-même, this sera, en mode strict, undefined :

```js
"use strict";

setTimeout(o1.f1, 1000); // ici setTimeout appel la fonction f1.
```

Pour corriger ce problème il faut écrire :

```js
setTimeout(() => o1.f1() , 1000); // ici setTimeout appel la fonction f1.

--- HORS PROGRAMME A LIRE PLUS TARD
```

## Fonction & fonction fléchée

En JS vous avez des fonctions déclarées et des expressions de fonction.

- fonction déclarée :

```js
function foo() {}
```

- Expression de fonction

```js
setTimeout(function () {});
```

### Exercice avec correction (lire les remarques)

Est ce le code suivant pose un problème à JS, c'est-à-dire provoque une erreur. Si oui expliquez pourquoi ?

Répondez sans executer le code

```js
*/
const PRECISION = 100;
console.log(average([11, 12, 19, 20]));

// Les fonction déclarée sont compilées en premier donc vous pouvez les appeler avant de les définir
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

```

### 04 Exercice contexte

Dire sans coder l'exemple suivant où Sophie va se trouver (dans quel objet ou contexte) ?

```js
school_01 = {
  students: [],
  set: function (name) {
    this.students.push(name);
  },
};

school_02 = {
  students: [],
  set: school_01.set,
};

school_02.set("Sophie");
```

### 04 Exercice contexte correction

La méthode set est appelée dans le contexte de school_02 et donc "Sophie" sera dans le tableau de school_02.

### 05 Exercice function & expression

Nommez les types de fonction ci-dessous :

```js
const myFunc = function () {
  function bar() {
    // ...
  }
};
```

Les fonctions déclarées sont définies dès le début du script ou de la fonction qui la contient.

Les expressions de fonction sont définies après leur évaluation.

### 05_bis Exercice function & expression

1. Est ce que le code suivant produit une erreur ? Ne testez pas le code, répondez simplement

**CORRECTION : oui car bar n'est pas définie, la fonction se trouve dans le scope de l'expression de fonction.**

```js
bar();

const myFunc = function () {
  function bar() {
    // ...
  }
};
```

2. Est ce que le code suivant est valide ? Si oui qu'affiche-t-il ?

**CORRECTION : oui c'est valide l'expression est appelée après sa définie et dans le scope de l'expression de fonction une fonction déclarée peut être appelée avant sa définition.**

```js
const myFunc = function () {
  bar();
  function bar() {
    console.log("hello");
  }
};

myFunc();
```

3. Est ce le code suivant est valide n'exécutez pas le code, répondez simplement ?

**CORRECTION : Non valide, car bar n'est pas dans le même scope donc non défini.**

```js
bar();

const myFunc = function () {
  // DANS UN SCOPE
  function bar() {
    console.log("hello");
  }
};

myFunc();
```

De même si on appelle la fonction après elle n'est pas dans le même scope, donc cela produira une erreur

```js
const myFunc = function () {
  function bar() {
    console.log("hello");
  }
};

myFunc();
bar(); // ERREUR NO DEF
```

### 06 Exercice déclaration

_Sans exécuter le code._

1. Le code suivant est-il valide ?

**CORRECTION : oui les fonctions déclarées sont compilées en premier dans leur scope courant**

```js
bar();

function bar() {
  console.log("bar");
}
```

2. Le code suivant est-il valide ?

**CORRECTION : non on ne peut pas appeler une expression de fonction avant de l'avoir définie.**

```js
myFunc();

const myFunc = function () {
  console.log("Expression");
};
```

### Les fonctions fléchées

Les fonctions fléchées (arrow function) permettent d'avoir une syntaxe plus courte pour définir facilement des fonctions de rappel (callback). On les utilise dans les fonctions JS telles que map, reduce, filter, ...

```js
const power2 = (x) => {
  return x ** 2;
};
const numbers = [1, 2, 5];
console.log(numbers.map(power2));
// [1, 4, 25]
```

Si vous ne retournez qu'une seule valeur, vous pouvez écrire la syntaxe suivante :

```js
// syntaxe consise
const sum = (x, y) => x + y;
```

Dans le cas où vous souhaiteriez retourner un unique littéral, utilisez la syntaxe suivante (expression) :

```js
// syntaxe consise
const model = (x, y) => ({ x, y });
console.log(model(1, 2)); // retournera { x : 1, y : 2 }

// Une syntaxe plus longue mais équivalente
const model2 = (x, y) => {
  return { x: x, y: y };
};
```

### 07 Exercice puissance 3

1. Soit numbers une liste de nombres entiers, élevez uniquement à la puissance 3 les nombres pairs. Utilisez une fonction flèchée pour cette question. Pensez à créeer un nouveau tableau avec les résultats demandés.

2. (facultatif) Faites un tableau des nombres pairs élevés à la puissance 2 et impairs à la puissance 3. Améliorez la fonction fléchée afin qu'elle puisse élever à une puissance quelconque un nombre donné.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

_Indications : pour calculer une puissance utilisez l'opérateur suivant_

```js
// opérateur puissance
2 ** 3; // 8
```

### 08 Exercice map fonction sur un tableau

La fonction map est une méthode qui s'applique au tableau. Elle retourne un tableau de même dimension que le tableau parcouru, on lui passe une fonction déclarée ou fléchée, cette fonction possède deux paramètres un obligatoire et l'autre facultatif.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.map((num, i) => {
  return num ** 2;
});
```

1. Multipliez pas 100 les nombres qui sont divisible par 3 en utilisant la fonction map.

## Le contexte des fonctions fléchées

Contrairement aux fonctions classiques, les fonctions fléchées ne re-définissent pas de this. Si vous vous référez dans une fonction fléchée au mot clé this, la fonction fléchée **récupérera le this du contexte** dans lequel elle a été définie.

```js
const School = {
  name: "Alan",
  sayHello() {
    // récupérer le this du context
    const that = this;
    function getName() {
      console.log(that.name); // Alan
      console.log(this.name); // undefined
    }
    getName();
  },

  sayHelloArrowFunc() {
    // La fonction fléchée récupère le context de l'objet courant School
    let func = () => {
      console.log(this.name); // Alan
    };
    func();
  },
};
School.sayHello();
School.sayHelloArrowFunc();
```


## Exemple  pour bien comprendre la portée du this dans différents contexts

```js
const School = {
   name : "3WA",
   setName : function(name){
       console.log(this);
       this.name = name;
       function upper(){
        // le this perd le contexte de School
        // une fonction déclarée re-définit le this (fonction constructeur)
        console.log(this); // le contexte global donc dans Node.js c'est l'objet global
        // this.name = this.name.toUppercase();
       }

       upper();
   },
   getName : function(){
       return this.name
   }
}

// 1. Quel est le this retourné par la méthode setName ?
// c'est le this de School.


School.setName("Lycee Aubenas");

console.log("School", School.getName());

// 2. Est ce que le code ajouter (fonction upper à modifier la chaîne de caractères name) ?

// Non il ne fonctionne pas le this de la fonction upper ne récupère le contexte de School mais le contexte global c'est dire ici l'objet global de Node.js


/*

Première solution avec une variable et la notion de portée

*/

const School2 = {
    name : "3WA",
    setName : function(name){
        this.name = name;
        const that = this; // portée de bloc this c'est School2 
        function upper(){
            // est ce que that est accessible dans upper
            that.name = that.name.toUpperCase();
        }
 
        upper();
    },
    getName : function(){
        return this.name
    }
 }

 School2.setName("Lycee Aubenas");

console.log("School2", School2.getName());

/*

Deuxième solution avec une fonction fléchée, récupère le this du context dans lequel elle a été définie

*/

const School3 = {
    name : "3WA",
    setName : function(name){
        this.name = name;
       
        const upper = () => {
            // est ce que that est accessible dans upper
            this.name = this.name.toUpperCase();
        }
 
        upper();
    },
    getName : function(){
        return this.name
    }
 }

 School3.setName("Lycee Aubenas");

console.log("School3", School3.getName());
```

### Rappel sur les fonctions constructeurs

Une fonction classique peut définir un constructeur, **pas une fonction flèchée**. Par convention le nom de la fonction commencera par une majuscule :

```js
function User(name) {
  // constructeur
  this.name = name;

  console.log(this.name);
}

const u1 = new user("Alan");
const u2 = new user("Alan");

// Le code qui suit produira une erreur
// pas de constructeur dans ce cas
/*const userArrow = name => {
  this.name = name;

  console.log(this.name);
}

const uA1 = new userArrow("Alan");
const uA2 = new userArrow("Alan");
*/
```

Remarque : si vous appelez la fonction constructeur comme une fonction classique, alors le this sera de type "undefined" en mode strict.

```js
"use strict";

function User(name) {
  console.log(this);
  this.name = name;
}

User("Alan"); // this undefined
```

### prototype d'une fonction

```js
const Student = {
  name: "",
  average: 17.5,
  situation: function () {
    console.log(`Name ${this.name} average : ${this.average}`);
  },
};
```

Cet objet possède une propriété **prototype**, elle listera l'ensemble des propriétés héritées depuis l'objet Student. La quasi-totalité des objets JS héritent de l'objet **Object** de JS.

```js
Student.__proto__;
```

Vous pouvez dès lors appeler des méthodes, qui ne sont pas directement héritées dans l'objet Student.

### Comment ajouter une propriété sur un constructeur

Reprenons l'exemple précédent, nous allons voir comment ajouter une propriété au constructeur User qui sera partagée par toutes ses instances :

```js
"use strict";

function User(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

let u1 = new User("Alan", "Phi");

// On ajoute sur le constructeur lui-même la propriété
User.prototype.fullName = function () {
  return this.name + " " + this.lastname;
};

console.log(u1.fullName()); // Alan Phi
```

### Exercice prototype

Ajoutez la possibilité de définir l'âge dans la fonction constructeur User. Modifiez pour toutes les instances de User la fonction fullName pour qu'elle affiche le name, le fullName et l'âge d'un user.

Créez maintenant les 4 users suivants :

```js
- Alan Phi age 45 ans notes : 15, 17, 13
- Bernad Lu age 78 ans notes : 11, 12, 9
- Sophie Boo age 56 ans notes : 10, 15, 11
- Alice Car age 45 ans notes : 5, 18, 20
```

Créez un nouveau prototype average dans la fonction constructeur User, qui calculera la moyenne des notes de chaque user.

Quand JS appelle cette méthode il ne la trouvera pas dans l'instance de User mais dans son prototype. Cette technique permet donc de créer des méthodes partagées par toutes les instances. Notez que vous pouvez tout à fait définir la méthode fullName après avoir fait son instance.

JS possède depuis **ES6** un mot clé class pour définir une classe, nous verrons qu'en fait ce mot clé permet de définir, comme dans l'exemple précédent, un constructeur.

## Fonctions fléchées et fonction de rappel dans les tableaux

Vous pouvez utiliser une fonction fléchée sur des collections en utilisant des fonctions comme map, filter ou reduce par exemple :

- map retourne un tableau de même dimension que le tableau parcouru.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const powerNumber = numbers.map((number) => number ** 2);
```

### Exercice puissance 3

Soit numbers une liste de nombres entiers, élevez uniquement à la puissance 3 les nombres pairs.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

_Indications : pour calculer une puissance utilisez l'opérateur suivant_

```js
// opérateur puissance
2 ** 3; // 8
```

- filter, il permet de filtrer des données dans un tableau en fonction d'un critère.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.filter((number) => number > 4);
// [5, 6, 7, 8, 9, 10]
```

- reduce, applique une fonction qui est un accumulateur et qui traite chaque valeur d'une liste de la gauche vers la droite afin de la réduire en une seule valeur. Vous pouvez passer en deuxième paramètre une valeur facultative.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// première paramètre fonction fléchée, deuxième paramètre val init de acc
const total = numbers.reduce((acc, curr) => curr + acc, 0);
console.log(total); // affiche 55

numbers.reduce((acc, curr) => curr + acc, 100);
// 155
```

### Exercice max

Reprenez l'objet numbers (array) de numériques et utilisez la méthode reduce pour calculer le max.

### Exercice reduce sum impair

Faites la somme des nombres impairs en utilisant la fonction reduce des valeurs suivantes :

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

### Exercice fonction map

Utilisez la fonction map pour calculer le prix TTC des téléphones. Utilisez une fonction fléchée.

```js
const phones = [
  { name: "iphone XX", priceHT: 900 },
  { name: "iphone X", priceHT: 700 },
  { name: "iphone B", priceHT: 200 },
];
```

### Exercice counter arrow

Corrigez le code (ES5) suivant afin que le compteur s'incrémente correctement.

```js
// ES5
const CounterV1 = {
  count: 0,
  // la fonction callback function reçoit l'élément courant this
  counter: function () {
    console.log(this.count); // affiche 0
    setInterval(function () {
      this.count++;
      console.log(this.count);
    }, 1000);
  },
};
CounterV1.counter();
```

## Affectation par décomposition

Vous pouvez affecter par décomposition des variables pré-définies comme suit :

```js
let a, b;
[a, b] = [10, 20];
```

Si vous ne souhaitez affecter que quelques variables et récupérer le reste de l'assignation dans un tableau, vous pouvez utiliser le spread operator :

```js
let a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [30, 40, 50]
```

Vous pouvez également sauter des arguments dans l'assignation :

```js
let a, b;
[, , a, b] = [10, 20, 11, 111];

console.log(a, b); // 11 111
```

De même vous pouvez par décomposition assigner des valeurs à des variables en fonction des clés d'un littéral, vous devez cependant dans ce cas utiliser les mêmes noms de variable que les clés du littéral :

```js
const student = { mention: "AB", note: 12 };
const { mention, note } = student;

console.log(mention); // AB
console.log(note); // 12
```

Il est parfois intéressant de renommer les clés, dans ce cas il faudra utiliser la syntaxe suivante :

```js
const student = { mention: "AB", note: 12 };
const { mention: m, note: n } = student;

console.log(m); // AB
console.log(n); // 12
```

On peut également le faire par imbrication :

```js
const st = {
  name: "Antoine",
  family: {
    mother: "Yvette",
    father: "Michel",
    sister: "Sylvie",
  },
  age: 49,
};

const {
  name,
  family: { sister },
} = st;
```

Vous pouvez également destructurer un littéral en argument d'une fonction :

```js
const student = { mention: "AB", note: 12 };
const infoStudent = ({ mention, note }) =>
  "info : " + mention + "note : " + note;

infoStudent(student);

//notez que vous pouvez également définir la fonction infoStudent sans vous souciez de l'ordre des clés :
const infoStudent_bis = ({ note, mention }) =>
  "info : " + mention + "note : " + note;
```

### Exercice permutations

- Permutez les valeurs a et b suivantes :

```js
let a = 1,
  b = 2;
```

- Soient les trois variables a, b, et c permutez les valeurs dans l'ordre suivant :

- a <- b
- b <- c
- c <- a

```js
let a = 1,
  b = 2,
  c = 4;
```

### Exercice assigner par décomposition

1. Calculez la moyenne des notes de l'étudiant. Modifiez la référence du littéral.

2. Puis assignez les valeurs **name**, **notes** et **average** dans les constantes name, notes et average dans le script courant.

```js
let student = {
  name: "Alan",
  notes: [10, 16, 17],
  average: null,
};

// TODO ...

// constantes
console.log(name, notes, average);
```

### Exercice iterate destructuring

Affichez le nom et le nom de la soeur de chaque étudiant en utilisant une boucle for of dans le littéral students :

// Nom : Alan soeur : Sylvie

```js
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
```

## spread operator

Vous pouvez effectuer une fusion des deux tableaux en JS à l'aide de l'opérateur spread :

```js
let numbers1 = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let numbers2 = [11, 12, 13];

let numMerge = [...numbers1, ...numbers2];
```

Vous pouvez également fusionner deux littéraux :

```js
const st1 = { s1: "Alan", s2: "Alice" };
const st2 = { s3: "Bernard", s4: "Sophie" };

const stMerge = { ...st1, ...st2 };
console.log(stMerge);
//{s1: "Alan", s2: "Alice", s3: "Bernard", s4: "Sophie"}
```

Le spread operator peut servir également pour mettre à jour une clé dans un littéral.

```js
const st11 = { s1: "Alan", s2: "Alice" };
const st22 = { s2: "Bernard", s4: "Sophie" };

const stMerge = { ...st11, ...st22 };

console.log(stMerge);
// {s1: "Alan", s2: "Bernard",  s4: "Sophie"}
```

Un autre exemple de mise à jour avec cette technique.

```js
const state = {
  name: "",
  age: 25,
  email: "alan@alan.fr",
};

const newState = { ...state, email: "sophie@sophie.fr" };
// {name: "", age: 25, email: "sophie@sophie.fr"}
```

## Exercice push value

Soient les données suivantes. Créez un tableau strNumbers et pushez-y chacune de ses valeurs.

```js
const strNumbers = [];
const str1 = ["one", "two"];
const str2 = ["three", "four"];
```

## Nom de propriété calculé et décomposition

Vous pouvez utiliser une variable pour définir une clé d'un littéral. Dans la syntaxe ci-dessous, il faut utiliser les crochets pour que JS interprète la variable comme une clé du littéral.

```js
const state = {
  name: "",
  email: "alan@alan.fr",
};

// définition d'une clé dynamique
let name = "email";
const newState = { ...state, [name]: "bernard@bernard.fr" };
```

## Exercice ordre et longueur de mots

Utilisez la fonction sort de JS.

1. Ordonnez les students par ordre alphabétique.

2. Ordonnez maintenant par ordre croissant en fonction de la longueur des noms.

```js
const students = ["Alan", "Philippe", "Tony", "Geraldine", "Michelle", "Phi"];
```

3. Ordonnez la liste des nombres suivants par ordre croissant :

```js
const numbers = [10, 7, 5, 1, 10, 5];
```

## Exercice populations

```js
const populations = [
  { id: 0, name: "Alan" },
  { id: 1, name: "Albert" },
  { id: 2, name: "Jhon" },
  { id: 3, name: "Brice" },
  { id: 4, name: "Alexendra" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl" },
  { id: 7, name: "Dallas" },
  { id: 8, name: "Dennis" },
  { id: 9, name: "Edgar" },
  { id: 10, name: "Erika" },
  { id: 11, name: "Isaac" },
  { id: 12, name: "Ian" },
];
```

1. Ordonnez les données populations par ordre croissant de longueur de nom.

2. Ajoutez une clé **lenName** aux éléments du tableau populations afin d'assignerer la longueur de chaque nom à cette variable.

3. Regroupez maintenant dans un nouveau tableau groupNames les noms de même longueur.

Vous pouvez présenter les résultats recherchés comme suit :

```js
[
  [{ id: 12, name: "Ian", lenName: 3 }],
  [
    { id: 0, name: "Alan", lenName: 4 },
    { id: 2, name: "Jhon", lenName: 4 },
    { id: 5, name: "Brad", lenName: 4 },
    { id: 6, name: "Carl", lenName: 4 },
  ],
  [
    { id: 3, name: "Brice", lenName: 5 },
    { id: 9, name: "Edgar", lenName: 5 },
    { id: 10, name: "Erika", lenName: 5 },
    { id: 11, name: "Isaac", lenName: 5 },
  ],
  [
    { id: 1, name: "Albert", lenName: 6 },
    { id: 7, name: "Dallas", lenName: 6 },
    { id: 8, name: "Dennis", lenName: 6 },
  ],
  [{ id: 4, name: "Alexendra", lenName: 9 }],
];
```

4. (Facultatif) Créez une clé relations au tableau populations et ajoutez pour chaque personne le nom de ses relations. Ordonnez les par ordre croissant de nombre de relations. Affichez la personne qui a le plus de relations.

```js
const relations = [
  { id: 0, relation: [1, 2, 4] },
  { id: 3, relation: [7, 8] },
  { id: 4, relation: [2, 7, 8, 11] },
  { id: 5, relation: [1, 2, 4] },
  { id: 7, relation: [2, 3, 5, 9] },
  { id: 9, relation: [1, 2, 4, 8, 11] },
  { id: 11, relation: [1, 2, 9, 10] },
];
```

## Interpolation

Vous pouvez écrire des chaînes de caractères sur plusieurs lignes et insérer des expressions JS qui seront évaluées à l'aide de backquotes (accent grave).

Exemple

```js
let a = 51;
let b = 90;
console.log("Somme " + (a + b) + " et\n multiplication " + a * b + ".");
```

Avec les backquotes on aura une expression plus facile à écrire :

```js
let a = 51;
let b = 90;
console.log(`Somme : ${a + b} et \n multiplication : ${a * b}.`);
```

Exemple avec une expression JS :

```js
let isLoading = true;
const message = `Data is ${isLoading ? "loading..." : "done!"}`;
```

Remarque sur la syntaxe ternaire, pour écrire une condition sur une ligne :

```js

console.log( true ? 'yes' : 'no'; ); // yes
console.log( false ? 'yes' : 'no'; ); // no

```

Les ternaires sont également très pratiques pour assigner des valeurs avec une condition :

```js
logged = true ? "yes" : "no"; // yes

logeed = false ? "yes" : "no"; // no
```

Vous pouvez enchaîner les ternaires mais, attention à la lisibilité.

```js
logged = true ? (true ? "toujours yes" : "no") : "no"; // toujours yes
```

## Ce qui est considéré comme faux en JS

0, NaN, undefined, false, "", '', \`\`, null

## Evaluations courcircuit

- Dans le cas où user n'est pas défini avec le connecteur ET

```js
false && user;
```

- Avec un OU

```js
true || user;
```

## Exercices supplémentaires

### Exercice accumulator

Créez une fonction récursive permettant de retourner la somme des nombres d'un tableau de valeurs numériques. Utilisez un paramètre facultatif pour accumuler les valeurs de la somme. Ce paramètre sera initialisé à zéro.

Utilisez la méthode shift() qui permet de dépiler la première valeur d'un tableau. Dans votre fonction récursive définissez **une condition d'arrêt**, sinon la fonction continuera de s'appeler elle-même indéfiniment (Stack Overflow).

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// retourne la première valeur du tableau en la supprimant du tableau
numbers.shift();

function accumulator(numbers, acc = 0) {
  // Une condition d'arrêt et retourner la somme des valeurs du tableau
  // dans la fonction on ré-appelle la fonction elle-même
  // accumulator(numbers, 10);
}

console.log(accumulator(numbers)); // doit retourner 55
```

## Exercice copie profonde

Faites une copie profonde de l'objet suivant :

```js
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
```
