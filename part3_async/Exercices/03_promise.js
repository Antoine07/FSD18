const p = (i) =>
  new Promise((resolve, reject) => {
    const posts = [{ title: "PHP" }, { title: "JS" }];

    // on a quelque chose d'asynchrone
    setTimeout(() => {
      if (typeof posts[i] == "undefined") {
        reject("Plus d'article");

        return;
      }

      resolve(posts[i]);
    }, 500);
  });

p(0)
  .then((post) => {
    console.log(post);

    return p(1); // retourne une nouvelle promesse
  })
  .then((post) => {
    console.log(post);

    return p(2);
  })
  .then((post) => {
    console.log(post);
  })
  .catch((message) => {
    console.error(message);
  });

// p(1).then( post => {
//   console.log(post);
// })
