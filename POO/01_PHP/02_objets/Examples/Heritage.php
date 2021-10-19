<?php 

// La classe générale
class Animal{

}

// La classe spécialisée qui apporte des précisions sur la classe générale
class Fish extends Animal{}


class Product{

    private $name = "productName";
    protected $ref = "00000";

}

class Book extends Product{

    public function info(){
        var_dump($this->ref);
        var_dump($this->name);
    }
}

$book = new Book;

$book->info();