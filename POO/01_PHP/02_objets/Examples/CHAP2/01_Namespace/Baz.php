<?php 

namespace Baz;

require_once __DIR__ . '/Model.php';

// alias
// use Model\Post as Post;
use Model\Post as PostBaz;

class Post{
    public function __construct(){
        echo "Post NAMESPACE " . __NAMESPACE__ ;
    }
}

$postBaz = new PostBaz;