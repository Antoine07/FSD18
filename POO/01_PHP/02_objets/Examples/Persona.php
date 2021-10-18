<?php

class Persona{
    // les attributs de la classe, les variables de la classe
    // attention variable privée => impossible de les atteindre dans le script courant
    private int $force;
    private string $secret;
    public float $age = 100;
    
    // n'initialiser les variables de la classe
    public function __construct(
       int $force, 
       string $secret = "my secret" // paramètre facultatif 
   ){
       $this->force = $force;
       $this->secret = $secret;
   }
}

$hydra = new Persona(force: 10); // une instance <=> $this
$libelle = new Persona(force: 2);
$dalinda = new Persona(force: 8);

// Un attribut 
echo $dalinda->age;

// ICI une variable publique peut muter (changer) dans le script courant (à l'exéterieur de la classe)
// Attention donc à cela car, vous ne maîtrisez plus les données qui vont être enregistrer dans l'objet
$dalinda->age = -100;

// Un attribut 
echo $dalinda->age;