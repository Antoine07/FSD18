<?php

// on peut préciser les types pour les paramètres d'une fonction
function model(string $tableName) : string{

    return $tableName;
}

// typer les paramètres de la fonction ainsi que son retour
function add($a, $b){

    return $a + $b;
}