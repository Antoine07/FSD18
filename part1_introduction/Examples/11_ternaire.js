console.log(true ? "yes" : "no");

// condition ? instruction01 : instruction02
// si condition vrai => instruction01 et si condition faux => instruction02

let test1 = true ? "A" : "B"; // A

let test2 = true ? (false ? "A" : "C") : "B"; // C

let test3 = true ? (false ? "A" : true ? "B" : "D") : "C"; // B

let test4 = false ? (true ? "A" : "B") : (true ? "C" : (false ? "D" : "E")); // C
