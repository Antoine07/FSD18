<?php

class Post
{

    public function __construct(string $post = "post")
    {
        $this->tableName = $post;
    }

    public function __toString()
    {
        return $this->tableName;
    }
}

$post = new Post;

// on essaye d'afficher l'objet à l'aide de l'instruction echo de PHP, apriori cela n'est pas possible
echo $post;


class Message
{

    public function __construct(string $message)
    {
        $this->message = $message;
    }

    public function __toString()
    {
        return strtoupper($this->message);
    }
}

echo "\n";

$message1 = new Message("bonjour");
$message2 = new Message("tout");
$message3 = new Message("le");
$message4 = new Message("monde");

echo $message1 . " " . $message2 . " ".$message3 . " " . $message4 . "\n";