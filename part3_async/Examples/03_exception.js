(function () {
  console.log("Start");
  throw new Error("Bad number ...");
  console.log("End");
});

function div(a, b) {
  if (b == 0) {
    // l'exception a arrêté les scripts
    throw new Error("Tu peux pas diviser par zéro");

    // return; // <-- ATTENTION CELA NE SERT A RIEN L'EXCEPTION A TERMINE LES SCRIPTS
  }

  return Math.floor((a / b) * 100) / 100;
}

try {
  div(2, 0);
} catch (e) {
  console.log("Mincie là il y a eu une exception dans ton code ...");
}

console.log("Ma la vie continue ...");