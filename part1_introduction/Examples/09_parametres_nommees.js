function baz({ a, b }) {
  console.log(a, b);
}

baz({ a: 1, b: 2 }); // 1 2
baz({ b: 2, a: 1 }); // 1 2

function setUser({ name, email, lastName, password }) {

    console.log("Name", name, "Email" , email, "Password" , password, "LastName" , lastName);
}

setUser({  email : "alan@alan.fr", name : "Alan",password : "123", lastName : "Turring" });