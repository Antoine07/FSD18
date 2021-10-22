<?php

class Persona{

    private float $force;
    private float $life = 100;
    // Le type de Role pour la variable 
    private Role $role ;

    public function __construct(float $force = 1000)
    {
        $this->setForce($force);
    }

    /**
     * Get the value of force
     */ 
    public function getForce():float
    {
        return $this->force;
    }

    /**
     * Set the value of force
     *
     * @return  null
     */ 
    public function setForce(float $force)
    {
        $this->force = $force;
    }

    /**
     * Get the value of life
     */ 
    public function getLife():float
    {
        return $this->life;
    }

    /**
     * Set the value of life
     *
     * @return  float
     */ 
    public function setLife(float $life)
    {
        $this->life = $life;
    }

    /**
     * Get the value of role
     */ 
    public function getRole():Role
    {
        return $this->role;
    }

    /**
     * Set the value of role
     *
     * @return  null
     */ 
    public function setRole(Role $role)
    {
        $this->role = $role;
    }
}

