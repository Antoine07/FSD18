<?php

// 0. Autoload
spl_autoload_register(function ($className) {
    require_once './src/' . $className . '.php';
});

$search = new SearchNumber([9, 10, 363, 8, 11, 8, 15, 7, 121, 67, 90, 12]);

// Interpolation d'une variable dans une chaîne de caractères
echo "Le plus grand nombre de la liste est {$search->biggest()}" . "\n";

$search->merge([19, 190, 18]);
$search->push(1000);

echo "Le plus grand nombre de la liste est {$search->biggest()}" . "\n";

var_dump($search->parity(2));

var_dump($search->parity(11));
