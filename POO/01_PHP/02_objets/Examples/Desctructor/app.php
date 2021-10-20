<?php

spl_autoload_register(function ($className) {
    require_once $className . '.php';
});

$readFile = new ReadFile("./data.txt");
$text = $readFile->read();

var_dump($text);

unset($readFile); // en supprimant => on va déclencher le Destruct on a deux choses 1 libérer la mémoire en supprimant l'objet 2 on a fermé la ressource, le fichier ouvert.
$sum = 0;
while($sum < 100) $sum++;

echo "La somme vaut $sum" . "\n";