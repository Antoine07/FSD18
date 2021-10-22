<?php

// Optimisation de l'inclusion des fichiers avec la constante __DIR__ de PHP qui donne le chemin absolu
// PHP ira dans ce cas plus vite pour récupé le contenu de votre fichier.
require_once __DIR__ .'/Model.php';

$model = new Model\Post;

echo PHP_EOL;

Model\foo();

echo PHP_EOL;

// echo __NAMESPACE__ ;  // nom du namespace dans lequel vous êtes