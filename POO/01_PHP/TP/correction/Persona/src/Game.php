<?php

class Game
{
    private Scene $scene;
    private float $hit = 1.;
    private int $shot = 0;
    private bool $start = true;

    public  function __construct(Scene $scene)
    {
        $this->scene = $scene;
    }

    public function run(): void
    {
        [$p1, $p2] = $this->scene->all();

        while ($p1->getLife() > 0 && $p2->getLife() > 0) {
            [$life1, $life2] = [$p1->getLife(), $p2->getLife()];

            // une chance sur 2 de commencer à se battre
            if (random_int(0, 1)) {
                $p2->setLife($life2 - $this->hit);
            } else {
                $p1->setLife($life1 - $this->hit);
            }

            $this->shot++;
        }

        $this->start = false;
    }

    public function __toString()
    {
        [$p1, $p2] = $this->scene->all();

        if ($p1->getLife() > 0) {
            $name = $p1->getRole()->getName();

            return "Winner name : $name, tour(s) : {$this->shot}, reste en vie : {$p1->getLife()}" ;
        }

        $name = $p2->getRole()->getName();

        return "Winner name : $name, tour(s) : {$this->shot}, , reste en vie : {$p2->getLife()}";
    }
}
