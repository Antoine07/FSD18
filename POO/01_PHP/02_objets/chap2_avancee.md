# Introduction aux notions avancées en Objet

## Namespace & auto-loader

- Définition Namespace

Ils représentent un moyen d'encapsuler des éléments comme des classes, des constantes ou des fonctions, à l'instar des dossiers et fichiers qui sont dans leur espace de nom.

```text
App/
    Controller/
        Home.php  <- ce fichier est "encapsulé" dans l'espace de nom de son dossier
    Model/
        Home.php

```

Ils permettent de résoudre deux problèmes :

1. Collisions de noms des fonctions, constantes ou classes dans le PHP ou dans des librairies tièrces.

2. Ils permettent de réduire les noms à l'aide d'alias de nom.

```php
// app.php

use Model_Home_Blog_Post as post;

```

Par exemple, ci-dessous avec le namespace Model, nous encapsulons la classe Post, la fonction foo et la constante Pass dans un espace.

**Attention, vous devez définir un namespace avant tout autre code PHP dans votre fichier, on écrira un namespace par fichier. Logiquement vous définissez votre namespace tout en haut du fichier dans vos cotes PHP.**

```php
<?php

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

Si on doit importer cette classe ailleurs, dans un fichier app.php qui est à la racine de votre application, fichier sans précision de namespace, précisons que ce fichier aura le **namespace racine**, nous devrons alors écrire :

```php

require_once __DIR__.'/src/Model.php';

$post = new Model\Post;
Model\foo();

echo Model\Pass;
```

On peut aller plus vite à l'aide de l'utilisation d'alias (mot clé as) :

```php

require_once __DIR__.'/src/Model.php';

// alias
use  Model\Post as Post;
use Model\foo as foo;
use Model\Pass as Pass;

$post = new Post;
```

On peut simplifier l'écriture précédente en ne mentionnant pas les alias, voyez ce qui suit :

```php

require_once __DIR__.'/src/Model.php';

// alias équivalent au précédent use Model\Post as Post <=> use Model\Post
use  Model\Post;
use Model\foo;
use Model\Pass;

$post = new Post;
```

Vous pouvez également, si vous en avez besoin renommer l'alias d'une fonction, d'uneclasse ou d'une constante importée, par exemple :

```php
use Model\foo as f;
```

Ceci à deux avantages :

1. On a un nom plus court de la fonction, classe ou constante

2. Evite la collision des noms des fonctions, classes ou constantes.

```php
<?php

namespace Baz;

use Model\foo as f;

function foo(){
    echo "foo dans Baz";
}

foo();
f();
```

## Utilisation pratique

Nous allons voir que les namespaces permettent également de définir un autoloading de classes, constantes ou fonctions très pratique.

Dans les recommandations de la PSR (PHP Standars Recommendations) vous devez construire votre application comme suit :

1. Une classe par fichier portant exactement le même nom de la classe.

2. Les namespaces doivent refléter l'arborescence de la structure des dossiers et fichier de vos classes.

3. Un namesapce de haut niveau peut être/doit être définit. Il permet d'encapsuler une application avec un nom, il ne sera pas en rapport avec la structure des dossiers/fichiers. Voyez comme le comme le nom de votre application.

4. Le dossier src n'est pas namespacé.

### 01 Exemple

```text
Shop/
    src/
        Bike.php     <-- <?php namespace Shop;
        Product.php  <-- <?php namespace Shop;
    app.php 
```

### 02 Exemple

```text
Shop/
    src/
        Model/
            Comment.php <-- <?php namespace Shop/Model;
            Blog/
                Post.php <-- namespace Shop/Blog/Model;
        Bike.php     <-- <?php namespace Shop;
        Product.php  <-- <?php namespace Shop;
    app.php 
```

### 01 Exercice 

Vous allez essayer de mettre en place un autoloader en considérant les namespaces.

Reprennez l'exercice Shop et namespacez les classes Bike et Product avec le namespace Shop de haut niveau en utilisant l'autoloader que nous avons mis en place et qu'il faudra adapter aux namepsaces.

Remarque : attention à l'antislash. Vous devez l'échapper  si vous le mettez dans une chaîne de caractères :

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