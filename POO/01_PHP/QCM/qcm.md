# QCM

## Qestion 01

1. Est-ce que la classe Tools est SINGLE RESPONSABILITY ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Oui 

[ ] Non

2. Combien de responsabilité pouvons-nous définir à partir de la classe "spaghetti" ci-après ? 

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] 1

[ ] 2

[ ] 3

[ ] 0

```php

class Tools{

    public function date(){
        return (new Datetime("now"))->format('d/m/y');
    }

    public function dateDay($days){
        return (new Datetime($days))->format('d/m/y');
    }

    public function input($name, $value){
        return sprintf( '<input type="text" name="%s" value="%s" />', $name, $value ); 
    }
}
```

## Question 02

Est-ce que la classe suivante vous sembles cohérente dans la surcharge de la méthode priceTTC ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```php
class Product
{
    public $price;
    public $name ;

    public function __construct(float $price, string $name)
    {
        $this->name = $name;
        $this->price = $price;
    }

    public function priceTTC(float $price, float $tva):float
    {
        return $price * (1 + $tva);
    }
}

class Book extends Product
{
    public function priceTTC(float $price, float $tva, float $taxe = .2):float
    {
         return $price * (1 + $tva) * $taxe;
    }
}

class Cart
{
    private $total = 0;
    private $products = [] ;

    public function setProduct( Product $product){
        $this->products[] = $product;
    }

    public function total()
    {
        // calcul du prix total
        foreach($this->products as $product)
            $this->total += $product->priceTTC($product->getPrice(), .2);
    }
}
```

[ ] Oui on peut ajouter autant d'arguments que l'on souhaite à une méthode qui surcharge une autre.

[ ] Oui mais ce n'est pas conseillé de le faire, car cela devient compliquer à utiliser dans le script courant.

[ ] Non PHP bloque ce type d'incohérence.

## Question 03

L'héritage définit quel degré de relation entre deux classes A parente et B enfante ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Une relation très faible entre la classe A et la classe B.

[ ] Une relation très faible entre la classe B et la classe A.

[ ] La classe B est fortement liée à la classe A.

[ ] La classe A est fortement liée à la classe B.

## Question 04

Quel est le symbole pour exprimer la visibilité **private**. 

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] -

[ ] +

[ ] #

## Question 05

Quel est le symbole pour exprimer la visibilité **public**. 

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] -

[ ] +

[ ] #

## Question 06

Quel est le symbole pour exprimer la visibilité **protected**. 

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] -

[ ] +

[ ] #

## Question 07

Soit la classe A ci-dessous. Peut-on instancier cette classe dans le script courant ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```php
class A{
    
    private function __construct(){
        $this->name = "A";
    }
}
```

[ ] Oui.

[ ] Non.

## Question 08

Soit la classe Model ci-dessous. Peut-on instancier cette classe dans le script courant ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```php
class Model{
    
    public function __construct(){
        $this->name = "Model";
    }
}
```

[ ] Oui.

[ ] Non.

## Question 09

Qu'affiche le code suivant ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```php
class Model{
    
    public function __construct(){
        echo $this->tableName ? "Anonymous" : null ;
    }
}

$post = new Model;
```

[ ] NULL

[ ] Anonymous

[ ] Model

[ ] Une exception PHP de type InvalidArgument


## Question 10

Qu'affiche le code suivant ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```php
class Model{
   private $tableName = "Model";
}

class Post extends Model{
  
  public function getName():string{

      return $this->tableName;
  }
}

$post = new Post;
echo $post->getName();
```

[ ] NULL

[ ] Anonymous

[ ] Model

[ ] Une exception PHP de TypeError

## Question 11

Qu'affiche le code suivant ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```php
class Model{
   protected $tableName = "Model";
}

class Post extends Model{
  
  public function getName():string{

      return $this->tableName;
  }
}

$post = new Post;
echo $post->getName();
```

[ ] NULL

[ ] ''

[ ] Model

[ ] Une exception PHP de TypeError

## Question 12

Qu'affiche le code suivant ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

```php
class Model{
   protected $tableName = "Model";
}

class Post extends Model{

  protected $tableName = "post";
  
  public function getName():string{

      return $this->tableName;
  }
}

$post = new Post;
echo $post->getName();
```

[ ] NULL

[ ] post

[ ] Model

[ ] Une exception PHP de TypeError

## Question 12

PHP est un langage compilé, interprété ou les deux ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] C'est un langage de interprété.

[ ] C'est un langage de compilé.

[ ] Les deux.

[ ] Ni l'un, ni l'autre.

## Question 13

Que signifie le principe d'encapsulation en objet ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Cela permet de définir des variables accessibles dans le script courant, que l'on peut changer

[ ] Cela permet de définir des variables non accessibles dans le script courant, que l'on ne pas modifier.

[ ] Il permet de la création de méthodes pas de variable.

[ ] Il permet de rendre les variables de classe statique et non accessible dans le script courant.

## Question 14

A quoi correspond le mot clé suivant :

```php
$this
```

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Il représente la classe abstraite, pas l'instance.

[ ] Il représente une instance de la classe abstraite, pas la classe.

[ ] Ce mot clé n'existe pas, il provoquera une erreur.

## Question 15

Quel est le principe de l’héritage .

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Il faut que la classe fille est un constructeur.

[ ] Il faut que la classe fille est au moins une méthode.

[ ] Une classe étendue doit être une sorte de ou est un.

[ ] Une classe étendue doit être n'importe quoi, ce n'est pas important.


## Question 16

Qu'est-ce qu'un auto-loader dans une application PHP ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] C'est une fonction qui vérifie que le code est écrit dans la bonne syntaxe.

[ ] C'est une fonction qui permet de récupérer le nom d'une classe non définit dans le script courant.

[ ] C'est un algorithme qui permet de d'inclure une classe non définit dans le script courant automatiquement.

## Question 17

Qu'est-ce qu'une méthode magique en PHP ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] C'est une fonction qui vérifie que le code est écrit dans la bonne syntaxe.

[ ] C'est une fonction s'exécute lorsqu'une action spécifique se réalise dans le script courant.

[ ] C'est un algorithme qui permet de nettoyer la mémoire PHP.