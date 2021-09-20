
const PRECISION = 100; // 2 chiffres après la virgule

// 0.2 <=> .2  manière équivalente
function ttc(price , tva = .2){
    price = parseFloat(price);
    tva = parseFloat(tva);

    if( isNaN(price) || isNaN(tva) ){
        console.error("Attention au type de vos données, ils doivent être numérique");

        return;
    }


    return Math.floor( price * ( 1 + tva ) * PRECISION) / PRECISION;
}

console.log( ttc(100, 0.2) ); // 120
console.log(  ttc(100.50, 0.2) ); // 144.72

// Message d'erreur

ttc("hello", 0.2); // Erreur de type
ttc(100.50, "hello"); // Erreur de type
ttc("hello", "hello"); // Erreur de type

console.log(ttc("100", ".3"));