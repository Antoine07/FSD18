function tdz() {
    // on ne peut pas accéder à une variable avant de l'avoir définie.
    console.log(tdz_val);
  
    let tdz_val = "Temporal Dead Zone";
  }
  
//   tdz();

  // Avant pas de TDZ avec var ... Un peu dangereux !!! 

  function tdz() {
    // on ne peut pas accéder à une variable avant de l'avoir définie.
    console.log(tdz_val);
  
    var tdz_val = "Temporal Dead Zone";
  }
  
  tdz();