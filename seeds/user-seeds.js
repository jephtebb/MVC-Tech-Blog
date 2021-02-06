const { User } = require('../models');

const userData = [
    {
        username: "Ayahna_b",
        email: "Ayahna_b@gmail.com",
        password: "Ayahna_2020@ssword1"
    },
    {
        username: "jeff",
        email: "jeff@gmail.com",
        password: "jeff1991"
    },
    {
        username: "Alise",
        email: "alise@gmail.com",
        password: "alise1960"
    },
    {
        username: "Solino",
        email: "solino@gmail.com",
        password: "solino1961"
    },
    {
        username: "Sophonie",
        email: "sophonie@gmail.com",
        password: "sophonie1993"
    },
    {
        username: "Daphney",
        email: "daphney@gmail.com",
        password: "daphney1996"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;