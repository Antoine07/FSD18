<?php

spl_autoload_register(function ($className) {

    // le namespace de haut niveau on le retire de l'arbo car il a aucun intérêt pour la création du chemin vers le fichier. Par contre vous devez le laisser, car il a un intérêt pour l'application.
    $className = trim( substr($className, strlen('Shop') ) , "\\" ) ;
    // DIRECTORY_SEPARATOR => / ou \ selon OS plus portable d'utiliser une constante
    // Lorsqu'on aura des dossiers et sous-dossiers il faudra remplacer les anti-slash par le DIRECTORY_SEPARATOR pour le chemin du fichier.
    $path = str_replace("\\", DIRECTORY_SEPARATOR , $className );

    require_once './src/' . $path . '.php';
});

// on aliasse les noms des classes pour avoir des noms de classe plus courts.
use Shop\Bike;
use Shop\Model\Data;

// 1. constantes 
define('TVA', .2);
define('PROMO', .1);

$data = new Data;

// 2. Code de l'application
$cart = [];
foreach($data->get() as $bike){
    $product = new Bike($bike['name'], $bike['price']);
    $product->setType($bike['type']);
    $product->setNumber($bike['number']);
    $cart[] = $product;
}

// Prix total et appliquer la promo

$total = 0.0;

foreach ($cart as $product) {
    $total += $product->getPrice() * (TVA  + 1);
}

// Promo de 10% sur le total ici rien n'est hard codé, vos constantes permettent de définir des données que vous pouvez facilement administrer en haut de vos scripts.
$reduction = $total * PROMO;
$total = $total * (1 - PROMO);

echo "Prix total : $total euro, la réduction est de : $reduction" . "\n";
