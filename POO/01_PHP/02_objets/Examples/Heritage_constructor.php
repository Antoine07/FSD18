<?php

class Product{
    private $name = "productName"; // non étendu
    protected $ref;

    public function __construct(string $name , string $ref = "00000" )
    {
        $this->name = $name;
        $this->ref = $ref;
    }
}

class Book extends Product{
    protected $ref = "b0001"; // redéfinir 

    public function __construct(string $name , string $ref = "00000" )
    {
        parent::__construct(name : $name, ref: $ref); // la méthode appelée dans la classe mère 
    }

    public function info(){
        var_dump($this->ref);
        //var_dump($this->name); // impossible on n'y a pas accès car private 
    }
}

// SI VOUS NE REDEFINISSEZ PAS LE CONSTRUCTEUR vous êtes obligé de lui passer des valeurs sachant que ce dernier est définie dans la classe mère
$book = new Book(name : "La route", ref: "b0001");

var_dump($book);