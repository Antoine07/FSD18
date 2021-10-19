<?php 

// La classe générale
class Animal{

}

// La classe spécialisée qui apporte des précisions sur la classe générale
class Fish extends Animal{}

class Product{
    private $name = "productName"; // non étendu
    protected $ref = "00000";
}

class Book extends Product{
    protected $ref = "b0001"; // redéfinir 
    public function info(){
        var_dump($this->ref);
        //var_dump($this->name); // impossible on n'y a pas accès car private 
    }
}

$book = new Book;
$book->info();