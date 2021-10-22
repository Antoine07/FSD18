<?php

class Calculator{

    // constante de classe
    const PRECISION = 2;

    // TODO une mémoire pour la calculatrice
    private array $res = [];

    public function add(float $a, float $b):float{

        // self permet ici d'appeler la constante de classe 
        return round($a + $b, self::PRECISION);
    }

    public function mult(float $a, float $b):float{

        // self permet ici d'appeler la constante de classe 
        return round($a * $b, self::PRECISION);
    }

    public function div(float $a, float $b):float|null{

        // TODO meilleur idée plus tard
        if($b == 0) return null;

        // self permet ici d'appeler la constante de classe 
        return round($a / $b, self::PRECISION);
    }

    public function sum(float ...$numbers):float{

        // self permet ici d'appeler la constante de classe 
        return round(array_sum($numbers), self::PRECISION);
    }
}

$calculator = new Calculator;

echo $calculator->add(1,2);
echo "\n";

echo $calculator->mult(7,2);
echo "\n";

echo $calculator->div(1,2);
echo "\n";

echo $calculator->sum( 1,2,3,4,5,6,7,8,9,10 );
echo "\n";