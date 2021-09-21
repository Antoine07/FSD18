
/*

Exercice 

1. Créez un objet littérale School avec une méthode set qui ajoute un étudiant à un tableau de l'objet School


*/

school_01 = {
    students : [],
    set : function(name){
        this.students.push(name)
    }
}

school_02 = {
    students : [],
    set : school_01.set

}

school_02.set("Sophie");

console.log("context1" ,school_01);
console.log("context2" , school_02);
