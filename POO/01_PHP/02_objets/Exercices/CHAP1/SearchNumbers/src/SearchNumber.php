<?php

class SearchNumber
{
    private array $numbers = [];

    // Initialisation avec une liste de nombre
    public function __construct(array $numbers)
    {
        $this->numbers = $numbers;
    }

    // merge cela permet de fusionner notre liste initiale avec la nouvelle liste
    public function merge(array $numbers): void
    {
        $this->numbers = [...$this->numbers, ...$numbers];
    }

    // En plus
    public function push(float $number): self
    {
        if (in_array($number, $this->numbers))
            throw new Exception("Vous ne pouvez pas ajouter deux fois le même nombre, $number");

        $this->numbers[] = $number;

        return $this;
    }

    public function biggest(): float
    {
        if (count($this->numbers) == 0) throw new Exception("Il n'y a pas de valeurs dans la liste de nombre");
        // la solution la plus rapide 
        // return max($this->numbers);

        // Plus long mais un peu plus difficile à mettre en place car il y a de l'algo
        $biggest = $this->numbers[0];

        for ($i = 1; $i < count($this->numbers); $i++) {
            if ($this->numbers[$i] > $biggest) $biggest = $this->numbers[$i];
        }

        return $biggest;
    }

    public function parity(int $parity):array
    {
        $res = [];
        foreach ($this->numbers as $number) {
            // si c'est différent de zéro c'est donc vrai => on passe à l'itération avec continue
            if ($number % $parity) continue;

            //Dans le cas contraire on ajoute le nombre à $res, le modulo vaut alors 0 c'est un multiple à garder
            $res[] = $number;
        }

        return $res;
    }
}
