<?php 

namespace Bar;

require_once __DIR__ . '/Model.php';

class Post{
    public function __construct(){
        echo "Post NAMESPACE " . __NAMESPACE__ ;
    }
}

$post = new Post;
echo PHP_EOL;
// Faire l'instanciation de la classe Post qui se trouve dans l'espace de nom Model 

$post2 = new \Model\Post;
echo PHP_EOL;
\Model\foo();
echo PHP_EOL;
echo \Model\PASS;
echo PHP_EOL;