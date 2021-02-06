const { Post } = require('../models');

const postData = [
    {
        title: "Your Day",
        post_content: "You just do not know how my day is going !",
        user_id: 3
    },
    {
        title: "School Day",
        post_content: "I had a lot of fun at school today. My science teacher took the whole class out to teach us about some amazing things about the environment",
        user_id: 1
    },
    {
        title: "Bootcamp",
        post_content: "I have been wanting to enroll in a bootcamp, but I was skeptical about it because of how expensive bootcamps are. Among all the bootcamps out there, I believe I made the best choice",
        user_id: 2

    },
    {
        title: "Money",
        post_content: "Money is any item or verifiable record that is generally accepted as payment for goods and services and repayment of debts, such as taxes, in a particular country or socio-economic context.",
        user_id: 5
    },
    {
        title: "Life",
        post_content: "Life is a characteristic that distinguishes physical entities that have biological processes, such as signaling and self-sustaining processes.",
        user_id: 4
    },
    {
        title: "Trading",
        post_content: "Trading is one of the most difficult things to master. According to many articles, 90% of traders lose money.",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;