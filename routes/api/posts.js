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
        avatar: req.user.avatar,
        user: req.user.id
    });

    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => res.json(err));
});

// @route GET localhost:3040/posts/total
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

// @route GET localhost:3040/posts/:postId
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
                res.json({ success: true, post });
            }
        })
        .catch(err => res.json(err));
});

// @route POST localhost:3040/posts/comment/:postId
// @desc add comment to post
// @access Private
router.post('/comment/:postId', authCheck, (req, res) => {
    const {errors, isValid} = validatePostInput(req.body);
    if (!isValid) {
        return res.json(errors);
    }
    postModel
        .findById(req.params.postId)
        .then(post => {
            if(!post) {
                return res.json({ msg: 'no post' });
            }

            const newComment = {
                title: req.body.title,
                text: req.body.text,
                name: req.user.name,
                avatar: req.user.avatar,
                user: req.user.id
            };
            post.comments.unshift(newComment);
            post
                .save()
                .then(post => res.json(post));
        })
        .catch(err => res.json(err));
});

// @route POST localhost:3040/posts/comment/:postId/:commentId
// @desc delete comment from post
// @access Private
router.delete('/comment/:postId/:commentId', authCheck, (req, res) => {
    postModel
        .findById(req.params.postId)
        .then(post => {
            if(post.comments.filter(comment => comment._id.toString() === req.params.commentId).length === 0) {
                return res.status(400).json({ msg: 'Comment does not exist' });
            }
            //삭제(배열)
            const removeIndex = post.comments
                .map(item => item._id.toString()) //_id를 toString으로 바꿔줌
                .indexOf(req.params.commentId)

            post.comments.splice(removeIndex, 1);
            post
                .save()
                .then(post => {
                    res.json(post)
                });
        });
});

module.exports = router;