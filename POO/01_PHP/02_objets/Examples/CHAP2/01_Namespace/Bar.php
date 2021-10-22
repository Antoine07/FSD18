<?php 

namespace Bar;

require_once __DIR__ . '/Model.php';

class Post{
    public function __construct(){
        echo "Post NAMESPACE " . __NAMESPACE__ ;
    }
}

$post = new Post;

