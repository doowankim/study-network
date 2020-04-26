const express = require('express');
const router = express.Router();
const postModel = require('../../model/post');
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
        area: req.body.area,
        avatar: req.user.avatar,
        user: req.user.id
    });

    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => res.json(err));
});

// @route GET localhost:3040/post/total
// @desc get posts
// @access Private & Public
router.get('/total', (req, res) => {
    postModel
        .find()
        .sort({ date: -1 }) //날짜에 맞춰서 최신순이 위로 게시된다
        .then(posts => {
            res.json({
                count: posts.length,
                posts: posts
            });
        })
        .catch(err => res.json(err));
});

// @route GET localhost:3040/post/:postId
// @desc get detail posts
// @access Private
router.get('/:postId', authCheck, (req, res) => {
    const id = req.params.postId;
    postModel
        .findById({_id: id})
        .then(post => {
            if(!post){
                return res.json({
                    msg: 'There is no posts for this user'
                });
            } else{
                res.json(post);
            }
        })
        .catch(err => res.json(err));
});

module.exports = router;