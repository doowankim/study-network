const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const userModel = require('../../model/user');

// @route POST localhost:3030/users
// @desc users register
// @access Public
router.post('/signup', (req, res) => {
    userModel
        .findOne({ email: req.body.email })
        .then(user => {
            if(user) {
                return res.json({
                    msg: '이메일이 이미 존재합니다'
                });
            } else {
                const avatar = gravatar.url(req.body.email, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                });

                const newUser = new userModel({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    avatar: avatar
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => res.json(err));
                    });
                });
            }
        })
        .catch(err => res.json(err));
});

module.exports = router;