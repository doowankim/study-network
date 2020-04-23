const express = require('express');
const router = express.Router();
const postModel = require('../../model/posting');
const passport = require('passport');
const authCheck = passport.authenticate('jwt', { session: false });

// @route POST localhost:3040/posts
// @desc Tests posts route
// @access Private
router.post('/', authCheck, (req, res) => {
    const newPost = new postModel({
        title: req.body.title,
        text: req.body.text,
        name: req.user.name,
        avatar: req.user.avatar,
        user: req.user.id
    });

    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => res.json(err));
});

module.exports = router;