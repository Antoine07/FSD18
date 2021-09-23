const login = (email, password ) => {
    return setTimeout(() => {
        console.log(email);
        return { email };
    }, 1000);
}

const email = login('alan@alan.fr', 1234567890);
console.log(email);