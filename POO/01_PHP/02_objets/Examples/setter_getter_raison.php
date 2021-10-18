<?php


class Car_01{

    public float $speed;

}

$car = new Car_01;
$car->speed = -1000000;

echo $car->speed;


class Car_02{
    private float $speed;

    /**
     * Get the value of speed
     */ 
    public function getSpeed():float
    {
        return $this->speed;
    }

    /**
     * Set the value of speed
     *
     * @return  null
     */ 
    public function setSpeed(float $speed)
    {
        if($speed >= 0 && $speed < 351)
            $this->speed = $speed;

    }
}

$car02 = new Car_02;