# Introduction aux notions avancées en Objet

## Namespace & auto-loader

- Définition 

Ils représentent un moyen d'encapsuler des éléments classes ou fonctions, à l'instar des dossiers et fichiers.

Ils permettent de résoudre deux problèmes :

1. Collisions de noms des fonctions ou classes dans le PHP ou dans des librairies tierces.

2. Ils permettent de réduire les noms à l'aide d'alias de nom.

Par exemple ci-dessous nous encapsulons la classe Post dans un espace de nom Model

```php
namespace Model;

function foo(){
    echo "foo";
}
const PASS = "123";
class Post{
    public function __construct(){
        echo "Post";
    }
}
```

Si on doit importer cette classe ailleurs, dans un fichier app.php qui est à la racine, avec le namespace racine nous devrons alors écrire :

```php

require_once __DIR__.'/src/Model.php';

$post = new Model\Post;
Model\foo();

echo Model\Pass;
```

Mais avec un alias nous pourrons écrire :

```php

require_once __DIR__.'/src/Model.php';

// alias
use  Model\Post as Post;
use Model\foo as foo;
use Model\Pass as Pass;

$post = new Post;
```

Notez que l'alias ci-dessus est équivalent à, le nom de la classe sous le dernier slash sera le nom de l'alias :

```php

require_once __DIR__.'/src/Model.php';

// alias équivalent au précédent use Model\Post as Post <=> use Model\Post
use  Model\Post;
use Model\foo;
use Model\Pass;

$post = new Post;
```

Vous pouvez également renommer l'alias de la fonction, classe ou constante importée, par exemple pour la fonction foo :

```php
use Model\foo as f;
```

## Utilisation pratique

Nous allons voir que les namespaces permettent également de définir un autoloading des classes, constantes ou fonctions très pratique.

Dans les recommandations de la PSR (PHP Standars Recommendations) vous devez construire votre application comme suit :

1. Une classe par fichier portant exactement le même nom de la classe.

2. Les namespaces doivent refléter l'arborescence de la structure des dossiers de la classe.

3. Un namesapce de haut niveau peut être/doit être définit. Il permet d'encapsuler une application avec un nom. Voyez comme le nom de votre application qui ne rentre pas dans l'arborescence des dossiers de la classe.

4. Le dossier src n'est pas en général namespacé.

### 01 Exemple

```text
Shop/
    src/
        Bike.php     <-- namespace Shop;
        Product.php  <-- namespace Shop;
    app.php 
```

### 02 Exemple

```text
Shop/
    src/
        Model/
            Comment.php <-- namespace Shop/Model;
            Blog/
                Post.php <-- namespace Shop/Blog/Model;
        Bike.php     <-- namespace Shop;
        Product.php  <-- namespace Shop;
    app.php 
```

### 01 Exercice 

Vous allez essayer de mettre en place un autoloader en considérant les namespaces.

Reprennez l'exercice Shop et namespacez les classes Bike et Product avec le namespace Shop de haut niveau en utilisant l'autoloader que nous avons mis en place.

Remarque : attention à l'antislash. Vous devez l'échapper dans la chaîne de caractères:

```php
"Shop\\Bike.php";
```

### 02 Exercice 

Considérez la structure d'application suivante et essayez de construire son auto-loader, dans les classes ne mettez pas de code, faites des classes vides pour l'exercice.

Utilisez également la fonction file_exists pour vérifier que la classe importée existe bien dans l'app.php

```text
Shop/
    src/
        Model/
            Comment.php <-- namespace Shop/Model;
            Blog/
                Post.php <-- namespace Shop/Blog/Model;
        Bike.php     <-- namespace Shop;
        Product.php  <-- namespace Shop;
    app.php 
```

## Autoloader composer

Dans une application PHP vous utiliserez en réalité l'auto-loader standard pour PHP de composer.

Composer permet d'installer des composants tiers dans votre application, comme swiftmailer pour l'envoi de mail :

```bash
composer require symfony/swiftmailer-bundle
```

- Téléchargez et installez composer sur votre machine.

Dans un nouveau dossier tapez la ligne de commande suivante, elle permet d'initialiser une application PHP avec composer

```bash
composer init -y 
```

## Classe abstraite

Elle n'est pas instanciable et se trouvera tout en haut de l'arbre d'héritage. Elle permet de définir des méthodes dites abstraites que toutes les classes filles devront obligatoirement définir. La méthode perimeter devra être définie dans les classe Triangle et Square par exemple.

Lorsqu'une classe devient trop générale et qu'elle peut définir ou imposer à ces classes filles des méthodes à implémenter alors on la définira comme abstraite.

```php
abstract class Geometry
{
    protected $h;
    protected $w;

    abstract public function perimeter(): int;

    public function dim(): array{

        retrun ['w' => $w, 'h' => $h];
    }
}

class Triangle extends Geometry
{

    protected $h = 10;
    protected $w = 30;

    public function perimeter(): int
    {
        return 2 * ($this->h + $this->w);
    }
}

class Square extends Geometry
{

    protected $w = 30;

    public function perimeter(): int
    {
        return 4 * $this->w;
    }
}
```

### 03 Exercice Shop

Dans l'exercice précédent Shop, créez une méthode abstraite info, elle retournera les informations liés à votre produit. Et mettez cette classe abstraite. Puis vérifiez que tout fonctionne correctement.