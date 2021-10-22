<?php

/**
 * 
 * $calculator = new ExpressionCalculator;
 * $operation = [ [11, 2], ["+"] ] ;
 * $calculator->result($operation);
 * 
 */

// définition de la classe c'est abstrait
class ExpressionCalculator
{

    public function result(array $operation): float | string
    {
        if (count($operation) != 2) return "Problème de structure du calcul";
        // $numbers = $operation[0];
        // $operator = $operation[1];
        // la meme chose que ci-dessous, assignation par décomposition
        [$numbers, $operator] = $operation;

        return match ($operator[0]) {
            "+" => array_sum($numbers),
            "*" => array_product($numbers),
            "-" => $this->sub($numbers),
            "/" => $this->division($numbers),
            "%" => $this->modulo($numbers),
            default => "Operateur inconnu"
        };
    }

    private function sub(array $numbers): float
    {
        // dépiler le premier élément, dépiler c'est retirer du tableau le premier élément
        // [11, 2, 8];
        // $res = 11 ; <- array_shift
        $res = array_shift($numbers);

        // [2, 8]
        /*
        * $res = 11 - 2  
        * $res = 9 - 8
        * $res = 1
        **/
        foreach ($numbers as $number) {
            $res -= $number; // $res = $res - $number;
        }

        return $res;
    }

    private function division(array $numbers): float
    {
        // [11, 2, 8]
        // $res = 11
        $res = array_shift($numbers);

        /*
        * Faire tourner l'algo pour bien comprendre
        * $res = 11 / 2  
        * $res = 5.5 / 8
        * $res = 0.6875
        **/
        foreach ($numbers as $number) {
            if ($number == 0) return $res;

            $res /= $number; // $res = $res / $number;
        }

        return $res;
    }

    private function modulo(array $numbers): float
    {
        // [11, 2, 8]
        // $res = 12
        $res = array_shift($numbers);

        /*
        * $res = 11 % 2  = 1
        * $res = 1 % 2
        * $res = 1 % 8 = 1 
        **/
        foreach ($numbers as $number) {
            if ($res == 0) return $res;

            $res %= $number; // $res = $res % $number;
        }

        return $res;
    }
}

// on fait une instance de la classe => on crée un objet
$expression = new ExpressionCalculator();

$operation = [[11, 2, 4, 3], ["+"]]; // tableau de tableaux 
echo $expression->result($operation);
echo "\n";
$operation = [[11, 2], ["*"]]; // tableau de tableaux 
echo $expression->result($operation);
echo "\n";

$operation = [[11, 2, 8], ["-"]]; // tableau de tableaux 
echo $expression->result($operation);
echo "\n";

$operation = [[11, 2, 8], ["/"]]; // tableau de tableaux 
echo $expression->result($operation);
echo "\n";

$operation = [[11, 2, 8], ["%"]]; // tableau de tableaux 
echo $expression->result($operation);
echo "\n";

$operation = [[12, 2, 8], ["%"]]; // tableau de tableaux 
echo $expression->result($operation);
echo "\n";
