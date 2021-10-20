<?php

class Product
{

    private string $name;
    private float $price;

    public function __construct(string $name, float $price)
    {
        $this->setPrice($price);
        $this->setName($name);
    }

    /**
     * Get the value of name
     */ 
    public function getName():string
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  null
     */ 
    public function setName(string $name):void
    {
        $this->name = $name;

    }

    /**
     * Get the value of price
     */ 
    public function getPrice():float
    {
        return $this->price;
    }

    /**
     * Set the value of price
     *
     * @return  self
     */ 
    public function setPrice(float $price):void
    {
        $this->price = $price;

    }
}
