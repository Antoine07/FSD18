<?php

class Scene
{

    private array $persona = [];

    public function all(): array
    {

        return $this->persona;
    }

    public function setPersona(Persona $persona): void
    {

        if (count($this->persona) == 2) throw new Exception("Vous avez déjà deux Persona dans la scène");

        $this->persona[] = $persona;
    }
}
