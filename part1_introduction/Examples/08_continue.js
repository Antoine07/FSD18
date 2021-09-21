
const notes = [ 10, 11, 12, 9, 8, 17];

for(const note of notes){

    if(note < 10 ) { 
        // passer à l'itération dans la boucle suivante directement sans faire le code qui suit
        continue ;
    }

    // code qui suit
    console.log(note);
}