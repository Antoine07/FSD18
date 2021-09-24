const Add = (number, callback) => {
    setTimeout(() => { callback(number); }, 500);
};

Add(1, number => {
    // variable définie au niveau du bloc
    let sum = number;
    //2 deuxième callback appelée par le premier callback
    Add(2, number => {
        sum += number; // on récupère la somme précédente
    //3 deuxième callback appelée par le deuxième callback
        Add(3, number => {
            sum += number;
            
            console.log(sum);
        });
    });
});