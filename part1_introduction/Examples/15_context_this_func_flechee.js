const School = {
   name : "3WA",
   setName : function(name){
       console.log(this);
       this.name = name;
       function upper(){
        // le this perd le contexte de School
        // une fonction déclarée re-définit le this (fonction constructeur)
        console.log(this); // le contexte global donc dans Node.js c'est l'objet global
        // this.name = this.name.toUppercase();
       }

       upper();
   },
   getName : function(){
       return this.name
   }
}

// 1. Quel est le this retourné par la méthode setName ?
// c'est le this de School.


School.setName("Lycee Aubenas");

console.log("School", School.getName());

// 2. Est ce que le code ajouter (fonction upper à modifier la chaîne de caractères name) ?

// Non il ne fonctionne pas le this de la fonction upper ne récupère le contexte de School mais le contexte global c'est dire ici l'objet global de Node.js


/*

Première solution avec une variable et la notion de portée

*/

const School2 = {
    name : "3WA",
    setName : function(name){
        this.name = name;
        const that = this; // portée de bloc this c'est School2 
        function upper(){
            // est ce que that est accessible dans upper
            that.name = that.name.toUpperCase();
        }
 
        upper();
    },
    getName : function(){
        return this.name
    }
 }

 School2.setName("Lycee Aubenas");

console.log("School2", School2.getName());



/*

Deuxième solution avec une fonction fléchée, récupère le this du context dans lequel elle a été définie

*/

const School3 = {
    name : "3WA",
    setName : function(name){
        this.name = name;
       
        const upper = () => {
            // est ce que that est accessible dans upper
            this.name = this.name.toUpperCase();
        }
 
        upper();
    },
    getName : function(){
        return this.name
    }
 }

 School3.setName("Lycee Aubenas");

console.log("School3", School3.getName());