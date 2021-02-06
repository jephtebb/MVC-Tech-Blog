const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "It seems like you have had a bad day"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "It looks like you enjoyed school today"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "I enrolled in the UCF bootcamp about two years ago. I enjoyed it"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "I would love to be a millionaire one day"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "My life needs to take a different direction"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "I can't believe I took that bad trade"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "I have been trading for 10 years"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Trading is my life now"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;