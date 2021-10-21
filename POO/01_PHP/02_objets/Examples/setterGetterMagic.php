<?php

class Product
{
    private float $price;
    private string $name;

    // setter et getter magic
    public function __set($name, $value)
    {
        var_dump("SETTER MAGIC --> " . $name);
        if (property_exists($this, $name)) {
            $this->$name = $value;
        }
    }
}

$product = new Product;

// $name // $value
$product->price = .5;  // $product->setPrice(.5);
$product->name = "apple";


