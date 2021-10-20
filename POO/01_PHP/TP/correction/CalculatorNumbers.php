<?php

class CalculatorNumbers
{

    private $numbers = [];
    private $sumNumbers = [];
    private $memory = [];

    public function push(float $number): self
    {
        // On lève une exception en Objet pour spécifier qu'une chose est inattendue.
        if(in_array($number,$this->numbers )) 
            throw new Exception("Vous ne pouvez pas ajouter deux fois le même nombre, $number");

        $this->numbers[] = $number;

        // cela permet de chaîner la/les méthodes de la classe
        return $this;
    }

    public function shuffle_01(): void
    {
        shuffle($this->numbers);
    }

    public function shuffle($complexity = 100): void
    {
        $count = $complexity;
        while ($count > 0) {
            [$i, $j] = $this->shuffleIndex();
            [$this->numbers[$i], $this->numbers[$j]] = [$this->numbers[$j], $this->numbers[$i]];
            $count -= 1;
        }
    }

    private function shuffleIndex(): array
    {
        $max =  count($this->numbers) - 1;
        [$i, $j] = [random_int(0, $max), random_int(0, $max)];

        while ($i == $j) {
            [$i, $j] = [random_int(0, $max), random_int(0, $max)];
        }

        return [$i, $j];
    }

    /**
     * Get the value of numbers
     */
    public function getNumbers(): array
    {
        return $this->numbers;
    }

    public function sumZipper(array $num1, array $num2): void
    {
        // condition verrou
        if (count($num1) != count($num2)) return;

        for ($i = 0; $i < count($num1); $i++) {
            $this->sumNumbers[] = $num1[$i] + $num2[$i];
        }
    }

    /**
     * Get the value of numbers
     */
    public function getSumNumbers(): array
    {
        return $this->sumNumbers;
    }

    public function sum(float ...$numbers): float
    {
        $sum = array_sum($numbers);
        $this->memory[] = $sum;

        return $sum;
    }

    public function resetMemory(): void
    {
        $this->memory = [];
    }

    /**
     * Get the value of memory
     */ 
    public function getMemory():array
    {
        return $this->memory;
    }
}

$calculator = new CalculatorNumbers;

$calculator
    ->push(1)
    ->push(2)
    // ->push(2)
    ->push(3)
    ->push(9)
    ->push(11)
    ->push(13)
    ->push(30)
    ->push(190)
    ->push(300)
    ->push(500);

var_dump($calculator->getNumbers());
$calculator->shuffle(complexity: 1000);
var_dump($calculator->getNumbers());

$calculator->sumZipper([1, 2, 3, 9], [1, 2, 3, 9]);
var_dump($calculator->getSumNumbers());

var_dump($calculator->sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
var_dump($calculator->sum(1, 2, 3, 4, 5, 6));

var_dump($calculator->getMemory());
$calculator->resetMemory();
var_dump($calculator->getMemory());
