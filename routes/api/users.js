const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const userModel = require('../../model/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const authCheck = passport.authenticate('jwt', { session: false });

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// @route POST localhost:3040/users
// @desc users register
// @access Public
router.post('/signup', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body); //사용자 입력값이 들어가면 errors, isValid로 아웃풋이 나옴

    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    userModel
        .findOne({ email: req.body.email })
        .then(user => {
            if(user) {
                errors.msg = '이메일이 이미 존재합니다';
                return res.json(errors);
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

// @route POST localhost:3040/users/login
// @desc user login /return jwt
// @access Public
router.post('/login', (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }
    //email이 있는지 없는지-> password 매칭-> 화면에 뿌려줌(return jwt)
    userModel
        .findOne({email: req.body.email})
        .then(user => {
            if(!user){
                errors.msg = '사용자를 찾을 수 없습니다';
                return res.json(errors);
            } else {
                bcrypt
                    .compare(req.body.password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            //token에 들어갈 내용 상수화
                            const payload = { id: user.id, name: user.name, avatar: user.avatar };
                            //token 생성
                            jwt.sign(
                                payload,
                                process.env.SECRET,
                                { expiresIn: 36000 },
                                (err, token) => {
                                    res.json({
                                        success: true,
                                        tokenInfo: 'Bearer ' + token
                                    });
                                }
                            )
                        } else {
                            errors.msg = '비밀번호가 틀렸습니다';
                            return res.json(errors);
                        }
                    })
                    .catch(err => res.json(err));
            }
        })
        .catch(err => res.json(err));
});

// @route GET localhost:3040/users/current
// @desc return current user
// @access Private
router.get('/current', authCheck, (req, res) => {

    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });

});

// @route GET localhost:3040/users/total
// @desc total user
// @access Private
router.get('/total', authCheck, (req, res) => {
    userModel
        .find()
        .then(users => {
            res.status(200).json({
                msg: 'Successful total users',
                count: users.length,
                users: users
            });
        })
        .catch(err => res.json(err));
});


// @route DELETE localhost:3040/users/delete/:userId
// @desc delete user
// @access Private
router.delete('/delete/:userId', authCheck, (req, res) => {
    userModel
        .remove({_id: req.params.userId})
        .then(result => {
            res.status(200).json({
                msg: 'Successful delete id'
            });
        })
        .catch(err => res.json(err));
});

module.exports = router;