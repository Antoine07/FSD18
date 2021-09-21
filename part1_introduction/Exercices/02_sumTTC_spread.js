const PRECISION = 100; // 2 chiffres après la virgule

// 0.2 <=> .2  manière équivalente
function sumTTC(p1, p2, p3, tva = 0.2) {
  p1 = parseFloat(p1);
  p2 = parseFloat(p2);
  p3 = parseFloat(p3);
  tva = parseFloat(tva);

  if (isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(tva)) {
    console.error(
      "Attention au type de vos données, ils doivent être numérique"
    );

    return;
  }

  let sumTTC = (p1 + p2 + p3) * (1 + tva);

  return Math.floor(sumTTC * PRECISION) / PRECISION;
}

console.log(sumTTC(...[7, 18, 9], 0.3));


// ttc
function ttc(price , tva = .2){
    price = parseFloat(price);
    tva = parseFloat(tva);

    if( isNaN(price) || isNaN(tva) ){
        console.error("Attention au type de vos données, ils doivent être numérique");

        return;
    }


    return Math.floor( price * ( 1 + tva ) * PRECISION) / PRECISION;
}

