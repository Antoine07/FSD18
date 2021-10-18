<?php

function zipper(array $tab1, array $tab2): array
{
    $res = [];

    // On doit vérifier que les deux tableaux ont bien même dimension
    if (count($tab1) != count($tab2)) return $res;

    for ($i = 0; $i < count($tab1); $i++) {
        // array_push ou la syntaxe suivante est équivalente
        $res[] = [$tab1[$i], $tab2[$i]];
    }

    return $res;
}

// zipper en version 7
var_dump(zipper([1, 2, 3], [4, 5, 6]));

// zipper en version 8
var_dump(zipper(tab1: [1, 2, 3], tab2: [4, 5, 6]));