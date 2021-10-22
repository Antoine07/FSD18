<?php

require_once __DIR__ . '/vendor/autoload.php';

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
