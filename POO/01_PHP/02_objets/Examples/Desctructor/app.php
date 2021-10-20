<?php

spl_autoload_register(function ($className) {
    require_once $className . '.php';
});

$readFile = new ReadFile("./data.txt");

$readFile->read();

