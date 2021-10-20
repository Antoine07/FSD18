<?php

class Bike extends Product
{

    private string $type;
    private string $number;

    /**
     * Get the value of string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * Set the value of type
     *
     * @return  void
     */
    public function setType(string $type): void
    {
        if (!in_array($type, ['course', 'city', 'vtc', 'vtt', 'electric']))
            throw new Exception("Type $type inconnu");

        $this->type = $type;
    }

    /**
     * Get the value of string
     */ 
    public function getNumber():string
    {
        return $this->number;
    }

    /**
     * Set the value of string
     *
     * @return  void
     */ 
    public function setNumber(string $number):void
    {
        $this->number = $number;
    }
}
