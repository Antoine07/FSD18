const School = {
   name : "3WA",
   setName : function(name){
       console.log(this);
       this.name = name;
       function upper(){

        this.name = this.name.toUppercase();
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

console.log(School.getName());

// 2. Est ce que le code ajouter (fonction upper à modifier la chaîne de caractères name) ?