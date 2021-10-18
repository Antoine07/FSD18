<?php

class Product{

    private string $name;

    public function __construct(string $name)
    {
        $this->name;
    }

    /**
     * Get the value of name
     */ 
    public function getName():string
    {
        return $this->name; // on peut depuis la classe retourner une variable privée
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
}