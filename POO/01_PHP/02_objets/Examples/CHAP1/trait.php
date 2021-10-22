<?php

// Un trait un fichier
trait showHello {
    public function hello() { echo "Hello " ; }
}

trait showWorld {
    public function world() { echo " World " ; }
}

class View{
    use showHello, showWorld;

    public function exclamation(){
        echo " !";
    }
}

$o = new View();
$o->hello();
$o->world();
$o->exclamation();
echo "\n";