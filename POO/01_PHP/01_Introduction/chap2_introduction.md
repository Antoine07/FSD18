# PHP

## Introduction

PHP est un langage de scripts Open Source spécialement conçu pour le développement d'application Web. Il peut être facilement intégré à une page HTML/CSS.

Aujourd'hui nous en sommes en mars 2021 à la version 8.0.3.

PHP n'est pas un langage orienté objet, mais il permet d'orienter son code en objets.

La syntaxe du PHP est inspirée du langage C, il est également peu typé et facile à prendre en main. La version 8 est une version majeure qui se caractérise par l'apport d'une fonctionnalité importante au niveau de la compilation : JIT (Just In Time).

- Inventeur : Rasmus Lerdorf en 1994.

## Paradigmes

- impératif 

- Orienté Objet

- fonctionnel

- procédural

- réflexif 

- interprété

## Syntaxe & caractéristiques

Le code PHP s'insère facilement dans une page HTML. Voici un exemple de code dans un fichier index.php. Notez que, dans le contexte suivant, le code PHP doit être inséré entre des balises ouvrante et fermante spécifiques :

```php
<!DOCTYPE html>
<html>
<head>
<title>Exemple de HTML</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
<?php echo "<p> Hello World !</p>";?>
</body>
</html>
```

Si le PHP n'est pas écrit dans une page HTML la balise fermante n'est pas obligatoire :

```php
<?php
$message = "Hello World";
echo $message;
```

## Variable

Pour définir une variable vous utiliserez la syntaxe suivante, la portée d'une variable dépendra du contexte de sa définition. 

```php
// doit commencer par un $ suivi d'un caractère ou d'un enderscore et de chiffres
$a = 7;
```

Exemple de contexte définissant une portée spécifique :

```php
$a = 1; /* portée globale */

// portée spécifique
// La variable $a n'est pas accessible dans la fonction qui définit un scope <=> enceinte fermée
function foo()
{ 
    echo $a; /* portée locale, variable non définie */
}

foo();

```

Certaines variables ont une portée globale en PHP, c'est le cas des supers globales (tableaux). Dans ce dernier cas elles traversent tous les scopes du script. Ces variables sont des variables internes à PHP, elles sont toujours disponibles.

```php
$_POST // utiliser pour récupérer les valeurs d'un formulaire
$_GET // utiliser pour récupérer les valeurs passées dans une url
$_SESSION // persistance des données côté serveur
// ...
```

### Constante 

Vous pouvez définir une constante à l'aide de la fonction **define** où vous voulez dans le script ou avec le mot clé const au début de votre script. Avec le mot clé const elle doivent être définie au plus haut niveau du contexte, car elles sont compilées dans ce cas en premier dans le script.

```php
// au début du script
const ANIMALS = ['dog', 'cat', 'bird'];

// n'importe où dans le script
function foo(){
   var_dump(ANIMALS); // on a accès avec les constantes dans tous les scopes
}
```

## Passage par référence 

Vous pouvez passer une variable par référence à une fonction pour modifier sa valeur dans le contexte parent.

```php
function increment(&$var) {
  $var++;
}
$a=5;
increment ($a); // affichera 6
```

### Exercice fonction permutation

Créez une fonction **permute** qui permute circulairement dans le script courant les trois valeurs suivantes :

```php
$a = 1;
$b = 2;
$c = 3;
```

### Portée statique

Une variable statique a une portée locale uniquement, cependant elle ne perd pas sa valeur lorsque le script appelle la fonction :

```php

function increment_static()
{
    static $a = 0;
    echo $a;
    $a++;
}
```

### Exercice suite de fibonacci

Utilisez le concept de variable statique et implémentez une fonction fibo permettant de calculer les valeurs de la suite de Fibonacci jusqu'au rang N.

Chaque fois que l'on appelera cette fonction on affichera une nouvelle valeur de la suite de Fibonacci.

1,1,2,3,5,8,13,21,34, ...

1
1
2 = 1 + 1
3 = 1 + 2
5 = 2 + 3
8 = 3 + 5

```text
rang 0 -> 0
rang 1 -> 1
rang 2 -> 1
rang 3 -> 2
rang 4 -> 3
rang 5 -> 5
...
```

## Correction

```php
<?php

function fibo()
{
    static $a = 0, $b = 1; // chaque appel garde la mémoire des valeurs précédentes

    // 0 1 1 2 3 5
    [$a, $b] = [$b, $a]; // permutation des valeurs
    $b = $a + $b; // terme suivant de la suite

    return $b;
}

echo fibo();
echo "\n";
echo fibo();
echo "\n";
echo fibo();
echo "\n";
echo fibo();
echo "\n";
echo fibo();
echo "\n";
echo fibo();
echo "\n";
echo fibo();
echo "\n";
```



## Les types 

- boolean

```php
$test1 = true ;
$test2 = false ;
```

- entier peuvent être précisés en base 10, 16, 8 ou 2

```php
$a = 1234; // un nombre décimal
$a = 0123; // un nombre octal (équivalent à 83 en décimal)
$a = 0x1A; // un nombre hexadecimal (équivalent à 26 en décimal)
$a = 0b11111111; // un nombre binaire (équivalent à 255 en decimal)
$a = 1_234_567; // un nombre décimal (à partir de PHP 7.4.0)
```

- Nombre à virgules flottantes 

float et double

- Chaînes de caractères

Cote simple ou double. Pour les cotes doubles PHP interprètera les caractères d'échappement et les variables dans la chaîne de caractères.

```php
$a = 'Alan';
$b = 'Turing';
echo "$a, $b"; 
```

- Tableau 

Un tableau est une carte de données associant clés/valeurs :

```txt
array(
    key  => value,
    key2 => value2,
    key3 => value3,
    ...
)
```

Pour la syntaxe en PHP on utilisera les crochets comme suit :

- Tableau indexé numériquement

```php
$a = [1, 2];
```

- Tableau indexé par des clés nommées

```php
$a = ['a' => 1, 'b' => 2];
```

- Les objets

```php
class A {}
$a = new A;
```

- Le type NULL

```php
$var = NULL;
```


## Manipulation et attribution de type

PHP ne permet pas d'imposer la définition des types de manière explicite lors de la déclaration d'une variable. Le type d'une variable est déterminé par le contexte d'utilisation.

```php

$str = "Hello Wordl ! " ; // type string
$number = 12; // type number
$foo = 5 * "10 Little Piggies"; // $foo est un entier (50)
```

### Modification des types

On peut modifier le type d'une variable en utilisant la syntaxe suivante :

```php
$foo = 10;               // $foo est un entier
$bar = (boolean) $foo;   // $bar est un booléen
```

Voici la liste des préfixes autorisés :

- (int), (integer) : modification en int
- (bool), (boolean) : modification en bool
- (float), (double), (real) : modification en float
- (string) : modification en string
- (array) : modification en array
- (object) : modification en object

## Fonctions nommées & anonymes

Une fonction n'a pas besoin d'être définie avant d'être utilisée. Sauf si vous l'appelez de manière conditionnelle. 

Vous pouvez définir une fonction dans une fonction.

```php

add( 1,2);

function add(int $a ,int $b):int{
    return $a + $b ;
}

```

### Typage des arguments et du retour d'une fonction

Nous pouvons également typer les arguments ainsi que les valeurs de retour. Vous pouvez également déclarer un ensemble de types en les séparant par une barre verticale, le caractère "pipe" : | .

```php

add( 1,2);

function add(int $a ,int $b):int{
    return $a + $b ;
}

function merge( int | array $a, int $b) : int | array {
    if( !is_array($a) )
        return [$a, $b];
    return $b;
}
```

### Arguments nommés

Depuis la version 8 de PHP vous pouvez nommer vos arguments lors de l'appel de la fonction, ceci permet de ne pas se soucier de leurs positions.

```php

function foo(int $a , array $numbers, int $c):void{
    foreach($numbers as $number) echo $a + $number + $c;
}

foo( numbers:[1, 2, 3], a: 2, c: 8);
```

### Exercice split_array 

Créez une fonction qui prend en argument un tableau de nombres et une valeur entière donnant la position pour spliter le tableau en deux. Si la valeur de la position est supérieure à la longueur du tableau, retournez le.

Vous pouvez utiliser la fonction array_shift de PHP pour dépiler le tableau.

```php
split_array(numbers: [4,6,9, 17], pos : 2);
// [ [4,6,9] , [17] ]
```

### Exercice mapped 

Créez une fonction mapped avec trois arguments glue, array et symbol. Voyez l'exemple ci-dessous. Elle permettra de rassembler les clés et les valeurs dans une chaîne de caractères.

```php
mapped(numbers: ['x' => 1,'y' => 2,'z' => 3,'t' => 7], glue : ', ', symbol : "=");
// x = 1, y = 2, z = 3, t = 7
```

### Exercice zip 

Créez une fonction permettant de regrouper terme à terme les éléments de deux tableaux de dimension 1. Elle retournera un tableau de dimension 2 regroupant les éléments.

```php
var_dump(zipper(tab1 : [1,2,3], tab2: [4,5,6]));
// [[1,4], [2,5], [3, 6]]
```
