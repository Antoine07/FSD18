const p = (i) => new Promise((resolve, reject) => {
    const posts = [{title: "PHP"} , {title: "JS"}]

    //ASYNCHRONE
    setTimeout(() => {
        if(typeof posts[i] == 'undefined') {
            reject("Plus d'articles")
            return;
        }
        resolve(posts[i])
    }, 500)

})

p(0)
    .then((post) => {
        console.log(post)
        return p(1); // nouvelle promesse
    })
    .then((post) => {
        console.log(post)
        return p(2); // nouvelle promesse
    })

    .then(post => {
    console.log(post);
})  
    .catch((message) => {
        console.log(message)
    })

/*
p(0).then( post => {
    console.log(post) // { title: 'PHP' }
});

p(1).then( post => {
    console.log(post) // { title: 'JS' }
})
*/


