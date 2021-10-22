# QCM

## Qestion 01

1. Est-ce que la classe Tools est SINGLE RESPONSABILITY ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Oui 

[X] Non <- Elle comporte trop de responsabilité

2. Combien de responsabilité pouvons-nous définir à partir de la classe "spaghetti" ci-après ? 

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] 1

[X] 2 <-  Une classe Date pour la gestion des dates et une classe Form pour gérer les éléments d'un formulaire

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

## Question 02  notation 0.5

Est-ce que la classe Book suivante vous sembles cohérente dans la surcharge de la méthode priceTTC ?

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
    // surcharge
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

[X] Oui mais ce n'est pas conseillé de le faire, car cela devient compliquer à utiliser dans le script courant.

[X] Non PHP bloque ce type d'incohérence. <--  lorsque les paramètres de la surcharge sont obligatoires 

```php
// ici la méthode possède 3 paramètres obligatoires alors qu'elle n'en a que deux dans la classe mère => BLOCAGE DE PHP
priceTTC(float $price, float $tva, float $taxe)
```

## Question 03

L'héritage définit quel degré de relation entre deux classes A parente et B enfante ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Une relation très faible entre la classe A et la classe B.

[ ] Une relation très faible entre la classe B et la classe A.

[X] La classe B est fortement liée à la classe A. <- c'est la relation la plus forte entre deux classes

[ ] La classe A est fortement liée à la classe B.

## Question 04

Quel est le symbole pour exprimer la visibilité **private**. 

Répondez en choisissant une seule et bonne réponse ci-dessous.

[X] -

[ ] +

[ ] #

## Question 05

Quel est le symbole pour exprimer la visibilité **public**. 

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] -

[X] +

[ ] #

## Question 06

Quel est le symbole pour exprimer la visibilité **protected**. 

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] -

[ ] +

[X] #

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

[X] Non. <-- le constructeur étant appelé à l'instanciation de la classe et celui-ci étant privé, l'instanciation est impossible, cela lève une erreur.

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

[X] Oui.

[ ] Non.

## Question 09 0.5

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

[X] NULL mais il y a quand même un warning de PHP qui est retourné

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

[X] Une exception PHP de TypeError <- La variable qui n'existe pas elle est donc NULL, mais celle-ci attend un retour de type string donc TypeError

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

[X] Model <- une méthode/attribut proctected est partagée entre sa classe mère et sa classe fille.

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

[X] post <- l'attribut tableName est re-défini dans la classe fille

[ ] Model

[ ] Une exception PHP de TypeError

## Question 12

PHP est un langage compilé, interprété ou les deux ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[X] C'est un langage de interprété.

[ ] C'est un langage de compilé.

[ ] Les deux.

[ ] Ni l'un, ni l'autre.

## Question 13

Que signifie le principe d'encapsulation en objet ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Cela permet de définir des variables accessibles dans le script courant, que l'on peut changer.

[X] Cela permet de définir des variables non accessibles dans le script courant, que l'on ne pas modifier. <-- Pour pouvoir changer ces valeurs, on définiera les accesseurs : getter et setter, qui sont des méthodes publiques.

[ ] Il permet la création de méthodes pas de variable.

[ ] Il permet de rendre les variables de classe statique  non accessible dans le script courant.

## Question 14

A quoi correspond le mot clé suivant :

```php
$this
```

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Il représente la classe abstraite, pas l'instance.

[X] Il représente une instance de la classe abstraite, pas la classe. <- Lorsque vous faîtes un new de la classe on crée une instance de celle-ci représentée par la méta-variable 
```php
$this
```

[ ] Ce mot clé n'existe pas, il provoquera une erreur.

## Question 15

Quel est le principe de l’héritage .

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] Il faut que la classe fille est un constructeur.

[ ] Il faut que la classe fille est au moins une méthode.

[X] Une classe étendue doit être une sorte de ou est un. <- C'est un principe qu'il faut absolument respecter

[ ] Une classe étendue doit être n'importe quoi, ce n'est pas important.


## Question 16

Qu'est-ce qu'un auto-loader dans une application PHP ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] C'est une fonction qui vérifie que le code est écrit dans la bonne syntaxe.

[ ] C'est une fonction qui permet de récupérer le nom d'une classe non définit dans le script courant.

[X] C'est un algorithme qui permet d'inclure une classe non définit dans le script courant automatiquement.

## Question 17

Qu'est-ce qu'une méthode magique en PHP ?

Répondez en choisissant une seule et bonne réponse ci-dessous.

[ ] C'est une fonction qui vérifie que le code est écrit dans la bonne syntaxe.

[X] C'est une fonction qui s'exécute lorsqu'une action spécifique se réalise dans le script courant.

[ ] C'est un algorithme qui permet de nettoyer la mémoire PHP.