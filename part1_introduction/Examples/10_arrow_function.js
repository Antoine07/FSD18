const power2 = (x) => {
  return x ** 2;
};

console.log(power2(2));

// Si vous n'avez qu'une seule chose à retourner dans le script courtant vous pouvez utiliser la syntaxe courte suivante
const power2bis = x => x**2;


console.log(power2bis(2));

// si vous deviez retourner l'objet suivant { a: 1, b: 2 } 

const model = (a, b) => { return { a: 1, b: 2 } } ;

console.log(model(1,2));

// Comment faire avec l'expression courte des arrow functions. Il suffit de forcer le retour de l'objet avec des parenthèses.

const modelBis = (a, b) => ({ a: 1, b: 2 })  ;

console.log(modelBis(1,2));