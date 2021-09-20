let a = 1;

function calcul() {
// On ne peut pas assigner une variable avant de l'avoir défini
// même si cette variable à droite 
  let a = 2 + a;

  console.log(a, "calcul");

  function sub_calcul() {
    let b = a + 1;

    console.log(b, "sub_calcul");
  }

  sub_calcul();
}

calcul();