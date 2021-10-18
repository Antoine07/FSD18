<?php

function fibo()
{
    static $a = 0, $b = 1;

    // 0 1 1 2 3 5
    [$a, $b] = [$b, $a];
    $b = $a + $b;

    return $b;
}

echo fibo();
echo "\n";
echo fibo();
echo "\n";
echo fibo();
echo "\n";
echo fibo();
echo "\n";
echo fibo();
echo "\n";
echo fibo();
echo "\n";
echo fibo();
echo "\n";

