<?php

// on peut préciser les types pour les paramètres d'une fonction
function model(string $tableName) : string{

    return $tableName;
}

// typer les paramètres de la fonction ainsi que son retour
function add(float $a, float $b) : float{

    return $a + $b;
}

echo add(1, 2);
// echo add(1, "Bonjour") ; // erreur de type
echo "\n";

// dans une chaîne de caractères PHP peut transformé le type si c'est possible, dans le cas de bonjour ce n'est pas possible
echo add (1, "2.3");
echo "\n";

