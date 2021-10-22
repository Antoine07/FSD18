<?php

class Role{
    private string $name;

    public function __construct(string $name)
    {
        $this->setName($name);
    }

    /**
     * Get the value of name
     */ 
    public function getName():string
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  null
     */ 
    public function setName(string $name):void
    {
        $this->name = $name;

    }
}