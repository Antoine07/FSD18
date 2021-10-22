<?php

// Model encapsule dans une bulle espace de nom les éléments suivants
namespace Model;

echo __NAMESPACE__ ; 

function foo(){
    echo "foo";
}
const PASS = "123";

class Post{
    public function __construct(){
        echo "Post NAMESPACE " . __NAMESPACE__ ;
    }
}