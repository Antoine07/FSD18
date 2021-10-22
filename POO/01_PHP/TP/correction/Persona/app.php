<?php

spl_autoload_register(function ($className) {
    require_once './src/' . $className . '.php';
});

$scene = new Scene;

$albert = new Persona();
$knight = new Role('knight');
$albert->setRole($knight);

$algerian = new Persona();
$dragon = new Role('dragon');
$algerian->setRole($dragon);

// Ajout des Persona à la scène

$scene->setPersona($albert);
$scene->setPersona($algerian);

// var_dump($scene);

// On a bloqué la possibilité d'ajouter plus de 2 dragons dans la scène
// $algerian2 = new Persona();
// $dragon2 = new Role('dragon');
// $algerian2->setRole($dragon);

// $scene->setPersona($algerian2);


// classe Game pour la gestion du jeu

$game = new Game($scene);
$game->run();

echo $game ;
echo "\n";
