const express = require('express');
const router = express.Router();
const profileModel = require('../../model/profile');
const userModel = require('../../model/user');
const passport = require('passport');
const authCheck = passport.authenticate('jwt', { session: false});

// @route DELETE localhost:3040/profile
// @desc delete user and profile
// @access Private
router.delete('/', authCheck, (req, res) => {
    profileModel
        .findOneAndRemove({ user: req.user.id })
        .then(() => {
            userModel
                .findOneAndRemove({ _id: req.user.id })
                .then(() => {
                    res.json({ success: true })
                });
        })
});

module.exports = router;