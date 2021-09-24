const callback = (resolve, reject) => {
  let i = 0;
  const posts = [{ title: "PHP" }, { title: "JS" }];

  const interval = setInterval(() => {
    console.log(i);
    if (typeof posts[i] == "undefined") {
      reject("Plus d'article ...");
      clearInterval(interval);

      return;
    }
    resolve(posts[i]);
  }, 1000);
};

// Essayez de passer 
const p = (i) => new Promise(callback);

p(0) // première promesse
  .then((post) =>{

    return p(1); // on relance la promesse
  })
  .then( post => {
      console.log(post);

      return p(2); // reject
  })
  .catch((message) => console.error(message));
