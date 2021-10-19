<?php

use Rectangle as GlobalRectangle;

class Rectangle
{
    private float $w;
    private float $h;
    const PRECISION = 2;

    public function __construct(float $w, float $h )
    {
        $this->w = $w;
        $this->h = $h;
    }

    public function perimeter(): float
    {

        // HARD CODING pour la précision faites au moins une variable de classe ou une constante
        // return round(2 * ($this->w + $this->h), 2);

        return round(2 * ($this->w + $this->h), self::PRECISION);
    }

    public function area(): float
    {

        return round($this->w * $this->h, self::PRECISION);
    }
}

// Classe Square une classe spécialisée de la classe Rectangle
class Square extends Rectangle
{
    public function __construct(float $c)
    {
        parent::__construct($c, $c);
    }
}

$sq1 = new Square(1.2);
echo $sq1->perimeter();
echo "\n";
echo $sq1->area();
echo "\n";
$sq2 = new Square(9.2);
echo $sq2->perimeter();
echo "\n";
echo $sq2->area();
echo "\n";
