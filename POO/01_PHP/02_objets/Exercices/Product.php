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


// Script 

define("TVA", .2);

$cart = [];
foreach(range(0,10) as $num){
    $cart[] = new Product(name : 'apple', price : 0.5);
}

foreach(range(0,5) as $num){
    $cart[] = new Product(name : 'orange', price : 0.5);
}

$total = 0.0;
foreach($cart as $product){
    $total += $product->getPrice() * ( TVA +  1 );
}

echo "Le total des produits commandés est : $total \n";

