<?php
// Importez les classes ici et créez les objets
// PHP avec require_once vérifie que c'est importé et une seule fois

// 0. Classes métiers

spl_autoload_register(function ($className) {
    var_dump($className);
    // le nom de la classe c'est le nom du fichier il sera donc correctement inclu
    require_once './src/' . $className . '.php';
});

// 1. constantes 
define('TVA', .2);
define('PROMO', .1);

// 2. Code de l'application
$cart = [];

$bromptonBase = new Bike('brompton base', 1500);
$bromptonBase->setType('city');
$bromptonBase->setNumber('191021abvdghA');
$cart[] = $bromptonBase;

$bromptonArgent = new Bike('brompton argent', 1900);
$bromptonArgent->settype('city');
$bromptonArgent->setNumber('191021abvdJAH');
$cart[] = $bromptonArgent;

$scottElectric = new Bike('scoot e2020', 1900);
$scottElectric->setType('electric');
$scottElectric->setNumber('1291H1JKl');
$cart[] = $scottElectric;

$scottCourse = new Bike('scoot course', 1000);
$scottCourse->setType('course');
$scottCourse->setNumber('1291H1WHX');
$cart[] = $scottCourse;

$scott2021 = new Bike('scoot e2021', 2700);
$scott2021->setType('electric');
$scott2021->setNumber('1291HHJQL');
$cart[] = $scott2021;

// Prix total et appliquer la promo

$total = 0.0;

foreach ($cart as $product) {
    $total += $product->getPrice() * (TVA  + 1);
}

// Promo de 10% sur le total ici rien n'est hard codé, vos constantes permettent de définir des données que vous pouvez facilement administrer en haut de vos scripts.
$reduction = $total * PROMO;
$total = $total * (1 - PROMO);

echo "Prix total : $total euro, la réduction est de : $reduction" . "\n";
