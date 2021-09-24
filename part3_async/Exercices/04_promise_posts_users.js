const p = (i) =>
  new Promise((resolve, reject) => {
    const posts = [
      { title: "PHP", userId: 0 },
      { title: "JS", userId: 1 },
    ];
    setTimeout(() => {
      if (typeof posts[i] == "undefined") {
        reject("Plus d'article");

        return;
      }
      resolve(posts[i]);
    }, 500);
  });

const u = (userId) =>
  new Promise((resolve, reject) => {
    const users = [
      { userId: 0, name: "Alan" },
      { userId: 1, name: "Sophie" },
    ];
    setTimeout(() => {
      if (typeof users[userId] == "undefined") {
        reject("Aucun auteur !");

        return;
      }

      resolve(users[userId]);
    }, 500);
  });

// v1 on utilise le fait qu'une peut retourner une promesse et on peut linéariser les then
p(0)
  .then((post) => {
    const { title, userId } = post;
    console.log("titre de l'article", title, userId);

    return u(userId);
  })
  .then((user) => {
    console.log("écrit par", user);
  })
  .catch((message) => console.error(message));

// v2 callback Hell même avec les promesses ...
p(0)
  .then((post) => {
    const { title, userId } = post;
    console.log("titre de l'article", title, userId);

    u(userId).then((user) => console.log(user));
  })

  .catch((message) => console.error(message));
